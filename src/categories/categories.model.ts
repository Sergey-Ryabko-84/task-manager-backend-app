import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface CategoriesCreationAttrs {
  name: string;
  userId: number;
}

@Table({ tableName: 'categories', updatedAt: false })
export class Category extends Model<Category, CategoriesCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Developers', description: 'Category name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: '1', description: 'User ID' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
}
