import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { CategoriesService } from './categories.service';
import { createCategoryDto } from './dto/create-category-dto';
import { Category } from './categories.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 201, type: Category })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: createCategoryDto) {
    return this.categoriesService.createCategory(dto);
  }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: [Category] })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.categoriesService.getAllCategory();
  }
}
