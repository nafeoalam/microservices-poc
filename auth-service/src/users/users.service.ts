import { Injectable } from '@nestjs/common';
import { UserEntity } from '@/users/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: UserEntity): Promise<UserEntity> {
    return this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: { email },
      relations: ['roles'],
    });
  }

  async findById(id: string): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: { id },
      relations: ['roles'],
    });
  }
}
