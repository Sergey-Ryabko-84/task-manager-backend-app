import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { UserRolesCorresponds } from './user-roles-corresponds.model';

interface UserRoleCreationAttrs {
  value: string;
}

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole, UserRoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'USER', description: 'Unique role value' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @BelongsToMany(() => User, () => UserRolesCorresponds)
  users: User[];
}
