import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user/user.models';
import { Model, UpdateQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  // creating a user
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  // reading the user collection
  async readUser() {
    return this.userModel
      .find({})
      .then((user) => {
        return user;
      })
      .catch((err) => console.log(err));
  }

  // updating the data
  async updateUser(id: any, data: UpdateQuery<UserDocument>): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  // deleting the data
  async deleteUser(id: any) {
    return this.userModel.findByIdAndRemove(id);
  }
}
