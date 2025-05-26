import { ApiPropertyOptional } from '@nestjs/swagger';
import { UserRoles } from '../enums';

export class UpdateUserDto {
  @ApiPropertyOptional({
    example: 'Ali Valiyev',
    description: 'Foydalanuvchi ismi',
  })
  readonly name?: string;

  @ApiPropertyOptional({
    example: '+998901234567',
    description: 'Telefon raqami',
  })
  readonly phone_number?: string;

  @ApiPropertyOptional({
    example: 'ADMIN',
    description: 'Foydalanuvchi roli',
    enum: UserRoles,
  })
  readonly role?: UserRoles;
}
