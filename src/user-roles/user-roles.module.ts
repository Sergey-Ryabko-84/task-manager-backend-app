import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRolesService } from './user-roles.service';
import { UserRolesController } from './user-roles.controller';
import { UserRole } from './user-roles.model';
import { User } from 'src/users/users.model';
import { UserRolesCorresponds } from './user-roles-corresponds.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [UserRolesService],
  controllers: [UserRolesController],
  imports: [
    SequelizeModule.forFeature([UserRole, User, UserRolesCorresponds]),
    AuthModule,
  ],
  exports: [UserRolesService],
})
export class UserRolesModule {}
