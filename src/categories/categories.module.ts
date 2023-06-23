import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './categories.model';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/users/users.model';
import { Task } from 'src/tasks/tasks.model';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [SequelizeModule.forFeature([Category, User, Task]), AuthModule],
})
export class CategoriesModule {}
