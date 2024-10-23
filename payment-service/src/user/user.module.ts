import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from "./entities/user.entity"; // Assuming User entity exists

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Add TypeOrmModule and the User entity
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
