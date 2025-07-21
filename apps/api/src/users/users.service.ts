import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByClerkId(clerkId: string) {
    return this.prisma.user.findUnique({
      where: { clerkId },
      select: {
        id: true,
        clerkId: true,
        email: true,
        name: true,
        imageUrl: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        clerkId: true,
        email: true,
        name: true,
        imageUrl: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async createFromClerk(clerkUser: any) {
    try {
      console.log('Creating user with data:', clerkUser);
      
      const userData = {
        clerkId: clerkUser.clerkId,
        email: clerkUser.email || 'user@example.com',
        name: clerkUser.name || `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || 'User',
        imageUrl: clerkUser.imageUrl || 'https://via.placeholder.com/150',
        role: 'USER' as const, // Default role
      };

      console.log('Processed user data:', userData);

      const user = await this.prisma.user.create({
        data: userData,
        select: {
          id: true,
          clerkId: true,
          email: true,
          name: true,
          imageUrl: true,
          role: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      console.log('User created successfully:', user);
      return user;
    } catch (error) {
      console.error('Error creating user from Clerk:', error);
      throw error;
    }
  }

  async updateUser(id: string, data: any) {
    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        clerkId: true,
        email: true,
        name: true,
        imageUrl: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        clerkId: true,
        email: true,
        name: true,
        imageUrl: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
} 