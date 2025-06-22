import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@ApiTags('users') // Swagger Tag
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new user' }) // Description for the operation
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  createUser(@Body() createUserDto: User): Promise<User> {
    return this.userService.create(createUserDto);
  }

  // GET Request: Get all users
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Successfully fetched all users.', type: [User] })
  @ApiResponse({ status: 404, description: 'Users not found.' })
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
