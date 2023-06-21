import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserRoleDto {
  @ApiProperty({ example: 'USER', description: 'User Role' })
  @IsString({ message: 'should be a string' })
  readonly value: string;
}
