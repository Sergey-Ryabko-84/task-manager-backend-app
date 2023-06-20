import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { UserRolesModule } from './user-roles/user-roles.module';
import { UserRole } from './user-roles/user-roles.model';
import { UserRolesCorresponds } from './user-roles/user-roles-corresponds.model';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/categories.model';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, UserRole, UserRolesCorresponds, Category],
      autoLoadModels: true,
    }),
    UsersModule,
    CategoriesModule,
    UserRolesModule,
    AuthModule,
  ],
})
export class AppModule {}
