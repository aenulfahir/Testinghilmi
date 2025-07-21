import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    
    if (!token) {
      throw new UnauthorizedException('Token tidak ditemukan');
    }
    
    try {
      // Verify token dengan Clerk
      const response = await fetch('https://api.clerk.com/v1/sessions/verify', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new UnauthorizedException('Token tidak valid');
      }

      const session = await response.json();
      
      // Attach user info to request
      request.user = {
        clerkId: session.user_id,
        email: session.user?.email_addresses?.[0]?.email_address,
        firstName: session.user?.first_name,
        lastName: session.user?.last_name,
      };
      
      return true;
    } catch (error) {
      console.error('Clerk auth error:', error);
      throw new UnauthorizedException('Token tidak valid');
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
} 