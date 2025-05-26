import { ApiProperty } from '@nestjs/swagger';
import { UserRoles } from '../enums';

export class CreateUserDto {
  @ApiProperty({ example: 'Ali Valiyev', description: 'Foydalanuvchi ismi' })
  name: string;

  @ApiProperty({ example: '+998901234567', description: 'Telefon raqami' })
  phone_number: string;

  @ApiProperty({
    example: 'USER',
    description: 'Foydalanuvchi roli',
    enum: UserRoles,
    required: false,
  })
  role?: UserRoles;
}
