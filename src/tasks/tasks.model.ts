import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';

interface TasksCreationAttrs {
  name: string;
  dateStart: string;
  dateEnd: string;
  categoryId: number;
}

@Table({ tableName: 'tasks', createdAt: false, updatedAt: false })
export class Task extends Model<Task, TasksCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Fix phone input field',
    description: 'Task name',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: '16.07.2023',
    description: 'Task start date',
  })
  @Column({
    type: DataType.DATE,
  })
  dateStart: string;

  @ApiProperty({
    example: '22.07.2023',
    description: 'Task end date',
  })
  @Column({
    type: DataType.DATE,
  })
  dateEnd: string;

  @ApiProperty({ example: '1', description: 'Category ID' })
  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
