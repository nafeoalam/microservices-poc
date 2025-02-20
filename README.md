# Technologies Implemented

## Backend

- **NestJS**: Version ^10.0.0
- **Express**: Version ^4.21.0
- **Mongoose**: Version ^8.6.3
- **TypeScript**: Version ^5.1.3
- **RabbitMQ**: Version ^3.12.0
- **AWS CloudWatch** / **Azure Monitor** : Upcoming...
- **Server-side Service Registry and Discovery** / **Azure Service Bus**: Upcoming...
- **AWS Elastic Load Balancers** / **Azure Load Balancers**: Upcoming...
- **AWS API Gateway** / **Azure API Management**: Upcoming...
- **AWS Lambda** / **Azure Functions**: Upcoming...
- **GraphQL**: Upcoming...

## Frontend

- **ReactJS**: Version ^18.3.1
- **React Router**: Not explicitly mentioned, but typically used in React applications
- **Axios**: Version ^1.7.7 for making HTTP requests
- **TypeScript**: Version ^4.4.2

## Database

- **MongoDB**: Used with Mongoose for data persistence

## Testing

- **Jest**: Version ^29.5.0 for unit and integration testing
- **Supertest**: Version ^6.3.3 for testing HTTP requests
- **Pactum**: Upcoming...

## Development Tools

- **Docker**: Used for containerization of RabbitMQ
- **Yarn** / **NPM** / **Bun**: Version not specified, used for package management
- **Prettier**: Version ^3.0.0 for code formatting
- **ESLint**: Version ^8.42.0 for linting

## Other Libraries

- **CORS**: Version ^2.8.5 for enabling Cross-Origin Resource Sharing
- **dotenv**: Version ^16.4.5 for environment variable management

# Some Important Commands

  ```bash
  lsof -i :<PORT_NO>
  kill 4977<PID>
  ./macos-start-services.sh 
  ```

## Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed.
- Install RabbitMQ on your local machine or use a cloud-based RabbitMQ service.

## Installation

### 1. Install RabbitMQ

You can install RabbitMQ using the following methods:

- **Using Homebrew (macOS)**:

  ```bash
  brew install rabbitmq
  ```

- **Using APT (Ubuntu)**:

  ```bash
  sudo apt-get update
  sudo apt-get install rabbitmq-server
  ```

- **Using Docker**:

  ```bash
  docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management
  ```

### 2. Start RabbitMQ

- If you installed RabbitMQ locally, you can start it using:

  ```bash
  rabbitmq-server
  ```

- If you are using Docker, the RabbitMQ server will start automatically with the above Docker command.

# RabbitMQ Implementation Steps (Payment Service)

## RabbitMQ Service (Shared Service)

```typescript


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
```

This is a core service that:

- Implements OnModuleInit and OnModuleDestroy for lifecycle management
- Handles connection and channel creation with RabbitMQ
- Provides a method to send messages to queues
- Automatically closes connections on module destruction

# Payment Controller (Message Producer)

```typescript
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
```

The payment controller:

- Injects the RabbitMQ service
- Sends messages to 'updateItemQueue' after payment processing
- Acts as a producer in the messaging system

# Inventory Service (Message Consumer)

```typescript
import { connect } from 'amqplib';
import axios from 'axios';

const queue = 'updateItemQueue';

async function start() {
  const connection = await connect('amqp://localhost');
  const channel = await connection.createChannel();
  await channel.assertQueue(queue);

  console.log('Waiting for messages in %s', queue);
  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const { productId } = JSON.parse(msg.content.toString());
      console.log('Received message:', productId);

      // Make the API call to update the inventory
      try {
        await axios.put(`http://localhost:3003/api/inventory/${productId}`, {
          message: 'Inventory updated',
        });
        console.log(`Inventory updated for product ID: ${productId}`);
      } catch (error) {
        console.error('Error updating inventory:', error.message);
      }

      channel.ack(msg); // Acknowledge the message
    }
  });
}

start().catch(console.error);
```

This worker:

- Connects to RabbitMQ independently
- Consumes messages from 'updateItemQueue'
- Makes HTTP calls to update inventory based on received messages
- Implements message acknowledgment
- Includes error handling


Summary

- RabbitMQ Service: Centralized messaging service
- Payment Controller: Producer of messages
- Inventory Service: Consumer of messages

Key Components Interaction Flow:

1. Message Production:
   - Payment controller receives payment request
   - Uses RabbitMQService to send message to queue
   - Message contains productId for inventory update

2. Message Consumption:
   - Inventory worker listens to queue
   - Processes received messages
   - Makes HTTP calls to inventory service
   - Acknowledges processed messages

3. Connection Management:
   - Services handle connections lifecycle
   - Proper cleanup on shutdown
   - Error handling and reconnection logic

