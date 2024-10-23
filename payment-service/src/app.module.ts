import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity'; // Import User entity
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Ensures ConfigModule is available globally
      envFilePath: '.env', // Path to the .env file (default is '.env')
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // Specify the database type (PostgreSQL)
      url: process.env.POSTGRESQL_URI, // Use environment variable for DB URL
      entities: [User], // Add your entity classes here
      synchronize: true, // Set to false in production; use migrations instead
    }),
    PaymentModule, // Import your custom modules
    UserModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
