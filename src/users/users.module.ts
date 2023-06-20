import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.model';
import { UserRole } from 'src/user-roles/user-roles.model';
import { UserRolesCorresponds } from 'src/user-roles/user-roles-corresponds.model';
import { Category } from 'src/categories/categories.model';
import { UserRolesModule } from 'src/user-roles/user-roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([
      User,
      UserRole,
      UserRolesCorresponds,
      Category,
    ]),
    UserRolesModule,
  ],
  exports: [UsersService],
})
export class UsersModule {}
