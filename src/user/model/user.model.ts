import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { UserRoles } from '../enums';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model {
  @Column({})
  name: string;

  @Column({})
  phone_number: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(UserRoles),
    defaultValue: UserRoles.USER,
  })
  role?: UserRoles;
}
