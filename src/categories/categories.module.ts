import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './categories.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [SequelizeModule.forFeature([Category]), AuthModule],
})
export class CategoriesModule {}
