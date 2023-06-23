import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserRole } from './user-roles.model';
import { CreateUserRoleDto } from './dto/create-user-role-dto';

@Injectable()
export class UserRolesService {
  constructor(
    @InjectModel(UserRole) private userRoleRepository: typeof UserRole,
  ) {}

  async createUserRole(dto: CreateUserRoleDto) {
    const userRole = await this.userRoleRepository.create(dto);
    return userRole;
  }

  async getAllUserRole() {
    const userRoles = await this.userRoleRepository.findAll();
    return userRoles;
  }

  async getUserRoleByValue(value: string) {
    const userRole = await this.userRoleRepository.findOne({
      where: { value },
    });
    return userRole;
  }
}
