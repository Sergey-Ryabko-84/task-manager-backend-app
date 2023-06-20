import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRolesService } from './user-roles.service';
import { UserRolesController } from './user-roles.controller';
import { UserRole } from './user-roles.model';
import { User } from 'src/users/users.model';
import { UserRolesCorresponds } from './user-roles-corresponds.model';

@Module({
  providers: [UserRolesService],
  controllers: [UserRolesController],
  imports: [SequelizeModule.forFeature([UserRole, User, UserRolesCorresponds])],
  exports: [UserRolesService],
})
export class UserRolesModule {}
