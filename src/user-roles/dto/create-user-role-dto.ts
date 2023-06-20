import { ApiProperty } from '@nestjs/swagger';

export class createUserRoleDto {
  @ApiProperty({ example: 'USER', description: 'User Role' })
  readonly value: string;
}
