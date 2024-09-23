import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async makePayment(@Body() body: { productId: number }) {
    // Logic to process payment
    console.log(body);
    return { success: true };
  }
}
