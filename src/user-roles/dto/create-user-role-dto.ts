import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRoleDto {
  @ApiProperty({ example: 'USER', description: 'User Role' })
  readonly value: string;
}
