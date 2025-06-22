import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "./entities/user.entity"; // Assuming User entity exists

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async create(data: any): Promise<User> {
    const newUser = this.userRepository.create({
      username: data.username,
      email: data.email,
      password: data.password,
    });
    return this.userRepository.save(newUser);
  }

  // Method for fetching all users (GET)
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

}
