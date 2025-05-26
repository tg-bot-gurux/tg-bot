import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create.user.sto';
import { UpdateUserDto } from './dto/updateuser.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Barcha foydalanuvchilarni olish' })
  getAll() {
    return this.userService.getAll();
  }

  @Post()
  @ApiOperation({ summary: 'Yangi foydalanuvchi yaratish' })
  create(@Body() payload: CreateUserDto) {
    return this.userService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Foydalanuvchini yangilash' })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(Number(id), dto);
  }
}
