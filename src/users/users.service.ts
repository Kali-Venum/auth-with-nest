import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    return this.UserModel.create({
      name: name,
      email: email,
      password: password,
    });
  }
}
