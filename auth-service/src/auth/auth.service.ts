import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '@/users/users.service';
import { UserEntity } from '@/users/entities/user.entity';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const user = await this.usersService.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, email: user.email };
    return {
      tokens: {
        accessToken: this.jwtService.sign(payload),
        refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
        expiresIn: 3600,
      },
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        roles: user.roles.map((role) => role.name),
      },
      message: 'Login successful',
    };
  }

  async register(registerDto: RegisterDto): Promise<void> {
    const user = new UserEntity();
    user.email = registerDto.email;
    user.password = await bcrypt.hash(registerDto.password, 10);
    user.firstName = registerDto.firstName;
    user.lastName = registerDto.lastName;
    await this.usersService.createUser(user);
  }

  async validateToken(token: string): Promise<boolean> {
    try {
      await this.jwtService.verifyAsync(token);
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
