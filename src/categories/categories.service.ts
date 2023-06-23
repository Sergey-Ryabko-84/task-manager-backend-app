import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category-dto';
import { EditCategoryDto } from './dto/edit-category-dto';
import { CategoryIdDto } from './dto/category-id-dto';
import { User } from 'src/users/users.model';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  async createCategory(dto: CreateCategoryDto, user: User) {
    const category = await this.categoryRepository.create({
      ...dto,
      userId: user.id,
    });
    return category;
  }

  async getAllCategory() {
    const category = await this.categoryRepository.findAll();
    return category;
  }

  async editCategory(dto: EditCategoryDto, user: User) {
    const category = await this.getCategoryById({ id: dto.id });
    if (category.userId === user.id) {
      await this.categoryRepository.update(
        { name: dto.name },
        { where: { id: category.id } },
      );
      return await this.getCategoryById({ id: dto.id });
    }
    throw new HttpException('No access', HttpStatus.FORBIDDEN);
  }

  async getCategoryById(dto: CategoryIdDto) {
    const category = await this.categoryRepository.findByPk(dto.id);
    return category;
  }

  async deleteCategoryById(dto: CategoryIdDto, user: User) {
    const category = await this.getCategoryById(dto);
    if (category.userId === user.id) {
      await this.categoryRepository.destroy({ where: { ...dto } });
      return { massage: 'Category successfully deleted' };
    }
    throw new HttpException('No access', HttpStatus.FORBIDDEN);
  }
}
