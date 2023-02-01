import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/register')
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<User> {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return await this.userService.createUser(name, email, hashedPassword);
  }
}
