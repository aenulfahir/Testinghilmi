import { Controller, Post, Headers, Body, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WebhooksService } from './webhooks.service';

@Controller('webhooks')
export class WebhooksController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly webhooksService: WebhooksService,
  ) {}

  @Post('clerk')
  async handleClerkWebhook(
    @Headers('svix-id') svixId: string,
    @Headers('svix-timestamp') svixTimestamp: string,
    @Headers('svix-signature') svixSignature: string,
    @Body() payload: any,
  ) {
    try {
      // Verify webhook signature
      const isValid = await this.webhooksService.verifyWebhook(
        svixId,
        svixTimestamp,
        svixSignature,
        payload,
      );

      if (!isValid) {
        throw new HttpException('Invalid webhook signature', HttpStatus.UNAUTHORIZED);
      }

      // Handle different webhook events
      const eventType = payload.type;

      switch (eventType) {
        case 'user.created':
          await this.handleUserCreated(payload.data);
          break;
        case 'user.updated':
          await this.handleUserUpdated(payload.data);
          break;
        case 'user.deleted':
          await this.handleUserDeleted(payload.data);
          break;
        default:
          console.log(`Unhandled webhook event: ${eventType}`);
      }

      return { success: true };
    } catch (error) {
      console.error('Webhook error:', error);
      throw new HttpException('Webhook processing failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async handleUserCreated(userData: any) {
    const { id, email_addresses, first_name, last_name, image_url } = userData;
    
    const email = email_addresses?.[0]?.email_address;
    const name = first_name && last_name ? `${first_name} ${last_name}` : first_name || last_name;

    if (!email) {
      throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
    }

    // Check if user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { clerkId: id },
    });

    if (existingUser) {
      console.log(`User with clerkId ${id} already exists`);
      return;
    }

    // Create new user
    await this.prisma.user.create({
      data: {
        clerkId: id,
        email,
        name,
        imageUrl: image_url,
        role: 'USER', // Default role
      },
    });

    console.log(`Created user with clerkId: ${id}`);
  }

  private async handleUserUpdated(userData: any) {
    const { id, email_addresses, first_name, last_name, image_url } = userData;
    
    const email = email_addresses?.[0]?.email_address;
    const name = first_name && last_name ? `${first_name} ${last_name}` : first_name || last_name;

    if (!email) {
      throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
    }

    // Update user
    await this.prisma.user.update({
      where: { clerkId: id },
      data: {
        email,
        name,
        imageUrl: image_url,
      },
    });

    console.log(`Updated user with clerkId: ${id}`);
  }

  private async handleUserDeleted(userData: any) {
    const { id } = userData;

    // Delete user
    await this.prisma.user.delete({
      where: { clerkId: id },
    });

    console.log(`Deleted user with clerkId: ${id}`);
  }
} 