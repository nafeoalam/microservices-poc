import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SharedModule } from '@/shared/shared.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '@/users/users.module';
import { RolesModule } from '@/roles/roles.module';

@Module({
  imports: [SharedModule, JwtModule.register({}), UsersModule, RolesModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
