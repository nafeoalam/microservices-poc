import { Module } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Module({
  providers: [RabbitmqService]
})
export class SharedModule {}
