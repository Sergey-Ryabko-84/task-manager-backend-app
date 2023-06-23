import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Category } from 'src/categories/categories.model';
import { Task } from './tasks.model';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [SequelizeModule.forFeature([Category, Task])],
})
export class TasksModule {}
