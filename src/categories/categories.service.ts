import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createCategoryDto } from './dto/create-category-dto';
import { Category } from './categories.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  async createCategory(dto: createCategoryDto) {
    const category = await this.categoryRepository.create(dto);
    return category;
  }

  async getAllCategory() {
    const category = await this.categoryRepository.findAll();
    return category;
  }
}
