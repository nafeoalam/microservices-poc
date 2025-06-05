import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
    format: 'email',
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'SecurePassword123!',
    minLength: 6,
    type: 'string',
    format: 'password',
  })
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}

export class LoginResponseDto {
  @ApiProperty({
    description: 'Authentication tokens',
    type: 'object',
    properties: {
      accessToken: { type: 'string', description: 'JWT access token' },
      refreshToken: { type: 'string', description: 'JWT refresh token' },
      expiresIn: {
        type: 'number',
        description: 'Token expiration time in seconds',
      },
    },
  })
  tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  };

  @ApiProperty({
    description: 'User profile information',
    type: 'object',
    properties: {
      id: { type: 'string', description: 'User ID' },
      email: { type: 'string', description: 'User email address' },
      firstName: { type: 'string', description: 'User first name' },
      lastName: { type: 'string', description: 'User last name' },
      roles: { type: 'array', description: 'User roles' },
    },
  })
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
  };

  @ApiProperty({
    description: 'Response message',
    example: 'Login successful',
  })
  message: string;
}
