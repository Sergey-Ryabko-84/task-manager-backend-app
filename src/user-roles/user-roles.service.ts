import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserRole } from './user-roles.model';
import { createUserRoleDto } from './dto/create-user-role-dto';

@Injectable()
export class UserRolesService {
  constructor(
    @InjectModel(UserRole) private userRoleRepository: typeof UserRole,
  ) {}

  async createUserRole(dto: createUserRoleDto) {
    const userRole = await this.userRoleRepository.create(dto);
    return userRole;
  }

  async getUserRoleByValue(value: string) {
    const userRole = await this.userRoleRepository.findOne({
      where: { value },
    });
    return userRole;
  }
}
