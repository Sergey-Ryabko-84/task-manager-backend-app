import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { UserRolesService } from './user-roles.service';
import { CreateUserRoleDto } from './dto/create-user-role-dto';
import { UserRole } from './user-roles.model';

@ApiTags('User Roles')
@Controller('user-roles')
export class UserRolesController {
  constructor(private userRolesService: UserRolesService) {}

  @ApiOperation({ summary: 'Create user role' })
  @ApiResponse({ status: 201, type: UserRole })
  @Post()
  create(@Body() dto: CreateUserRoleDto) {
    return this.userRolesService.createUserRole(dto);
  }

  @ApiOperation({ summary: 'Get user role' })
  @ApiResponse({ status: 200, type: UserRole })
  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.userRolesService.getUserRoleByValue(value);
  }
}
