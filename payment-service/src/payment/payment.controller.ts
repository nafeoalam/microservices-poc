import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from '@/payment/payment.service';
import { RabbitMQService } from '@/shared/rabbitmq.service';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Post()
  async makePayment(@Body() body: { productId: number }) {
    // Logic to process payment
    console.log(body);

    // Send message to update inventory or any other service
    await this.rabbitMQService.sendMessage('updateItemQueue', {
      productId: body.productId,
    });

    return { success: true };
  }
}
