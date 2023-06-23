import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { CategoriesService } from './categories.service';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category-dto';
import { EditCategoryDto } from './dto/edit-category-dto';
import { CategoryIdDto } from './dto/category-id-dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { ReqUser } from 'src/auth/user.decorator';
import { User } from 'src/users/users.model';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 201, type: Category })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() dto: CreateCategoryDto, @ReqUser() user: User) {
    return this.categoriesService.createCategory(dto, user);
  }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: [Category] })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.categoriesService.getAllCategory();
  }

  @ApiOperation({ summary: 'Edit category' })
  @ApiResponse({ status: 200, type: Category })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Patch()
  edit(@Body() dto: EditCategoryDto, @ReqUser() user: User) {
    return this.categoriesService.editCategory(dto, user);
  }

  @ApiOperation({ summary: 'Delete category' })
  @ApiResponse({ status: 200, type: [Category] })
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @Delete()
  deleteById(@Body() dto: CategoryIdDto, @ReqUser() user: User) {
    const massage = this.categoriesService.deleteCategoryById(dto, user);
    return massage;
  }
}
