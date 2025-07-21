import { Controller, Get, UseGuards, Request, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClerkAuthGuard } from '../auth/clerk-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @UseGuards(ClerkAuthGuard)
  async getCurrentUser(@Request() req) {
    try {
      const clerkId = req.user.clerkId;
      let user = await this.usersService.findByClerkId(clerkId);
      
      if (!user) {
        // If user doesn't exist in database, create them
        console.log('Creating new user from Clerk data:', req.user);
        user = await this.usersService.createFromClerk(req.user);
        console.log('User created successfully:', user);
      }
      
      return user;
    } catch (error) {
      console.error('Error in getCurrentUser:', error);
      throw error;
    }
  }

  // Temporary endpoint for testing without authentication
  @Get('test')
  async getTestUser() {
    return {
      id: 'test-id',
      clerkId: 'test-clerk-id',
      email: 'test@example.com',
      name: 'Test User',
      imageUrl: 'https://via.placeholder.com/150',
      role: 'USER',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }

  // Endpoint untuk create user dari Clerk data
  @Post('create')
  async createUser(@Body() userData: any) {
    return this.usersService.createFromClerk(userData);
  }

  // Debug endpoint untuk melihat semua users
  @Get('all')
  async getAllUsers() {
    return this.usersService.findAll();
  }
} 