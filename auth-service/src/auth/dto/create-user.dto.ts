import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEnum,
  IsArray,
  IsUUID,
} from 'class-validator';
import { AuthProvider, UserStatus } from '@/users/entities/user.entity';

export class CreateUserDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  password?: string;

  @IsString({ message: 'First name must be a string' })
  @IsNotEmpty({ message: 'First name is required' })
  firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty({ message: 'Last name is required' })
  lastName: string;

  @IsOptional()
  @IsString({ message: 'Avatar must be a string' })
  avatar?: string;

  @IsOptional()
  @IsEnum(AuthProvider, { message: 'Invalid authentication provider' })
  provider?: AuthProvider;

  @IsOptional()
  @IsString({ message: 'Provider ID must be a string' })
  providerId?: string;

  @IsOptional()
  @IsEnum(UserStatus, { message: 'Invalid user status' })
  status?: UserStatus;

  @IsOptional()
  @IsArray({ message: 'Role IDs must be an array' })
  @IsUUID('4', { each: true, message: 'Each role ID must be a valid UUID' })
  roleIds?: string[];
}
