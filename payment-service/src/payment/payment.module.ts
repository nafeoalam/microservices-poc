import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { RabbitMQService } from '@/shared/rabbitmq.service';

@Module({
  providers: [PaymentService,RabbitMQService],
  controllers: [PaymentController]
})
export class PaymentModule {}
