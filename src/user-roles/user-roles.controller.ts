import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { UserRolesService } from './user-roles.service';
import { CreateUserRoleDto } from './dto/create-user-role-dto';
import { UserRole } from './user-roles.model';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('User Roles')
@Controller('user-roles')
export class UserRolesController {
  constructor(private userRolesService: UserRolesService) {}

  @ApiOperation({ summary: 'Create user role' })
  @ApiResponse({ status: 201, type: UserRole })
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateUserRoleDto) {
    return this.userRolesService.createUserRole(dto);
  }

  @ApiOperation({ summary: 'Get all user roles' })
  @ApiResponse({ status: 200, type: UserRole })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userRolesService.getAllUserRole();
  }

  @ApiOperation({ summary: 'Get user role by value' })
  @ApiResponse({ status: 200, type: UserRole })
  @UseGuards(JwtAuthGuard)
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.userRolesService.getUserRoleByValue(value);
  }
}
