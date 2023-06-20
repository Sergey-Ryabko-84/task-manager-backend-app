import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { UserRole } from './user-roles.model';

@Table({
  tableName: 'user_roles_corresponds',
  createdAt: false,
  updatedAt: false,
})
export class UserRolesCorresponds extends Model<UserRolesCorresponds> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @ForeignKey(() => UserRole)
  @Column({
    type: DataType.INTEGER,
  })
  userRoleId: number;
}
