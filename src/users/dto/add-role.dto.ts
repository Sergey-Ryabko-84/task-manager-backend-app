import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({ example: 'USER', description: 'User Role' })
  readonly value: string;

  @ApiProperty({ example: '1', description: 'User ID' })
  readonly userId: number;
}
