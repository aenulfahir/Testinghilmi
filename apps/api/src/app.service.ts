import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Selamat datang di HILMI API! 🚀';
  }
} 