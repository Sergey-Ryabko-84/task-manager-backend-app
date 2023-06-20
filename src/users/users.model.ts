import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { userRoles } from './user-roles';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users', createdAt: false, updatedAt: false })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'developer@mail.com', description: 'Email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'qvX!8T)3-D', description: 'Password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'User', description: 'Role' })
  @Column({
    type: DataType.ENUM,
    values: userRoles,
    defaultValue: 'user',
    allowNull: false,
  })
  role: string;
}
