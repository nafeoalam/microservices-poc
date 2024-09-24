import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as amqp from 'amqplib';

@Injectable()
export class RabbitMQService implements OnModuleInit, OnModuleDestroy {
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  async onModuleInit() {
    this.connection = await amqp.connect('amqp://localhost');
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue('updateItemQueue');
  }

  async onModuleDestroy() {
    await this.channel.close();
    await this.connection.close();
  }

  async sendMessage(queue: string, msg: Object) {
    const messageBuffer = Buffer.from(JSON.stringify(msg));
    this.channel.sendToQueue(queue, messageBuffer);
  }
}
