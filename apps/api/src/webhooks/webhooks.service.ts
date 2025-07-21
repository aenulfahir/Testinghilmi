import { Injectable } from '@nestjs/common';

@Injectable()
export class WebhooksService {
  async verifyWebhook(
    svixId: string,
    svixTimestamp: string,
    svixSignature: string,
    payload: any,
  ): Promise<boolean> {
    // TODO: Implement proper webhook signature verification
    // For now, we'll return true to allow development
    // In production, you should use the svix library to verify signatures
    
    console.log('Webhook verification:', {
      svixId,
      svixTimestamp,
      svixSignature,
      payloadType: payload.type,
    });

    return true;
  }
} 