import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create.user.sto';
import { UpdateUserDto } from './dto/updateuser.dto';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async getAll() {
    return this.userModel.findAll();
  }

  async create(payload: CreateUserDto) {
    const user = await this.userModel.create({
      name: payload.name,
      phone_number: payload.phone_number,
      role: payload.role,
    });
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user.update(dto);
  }
}
