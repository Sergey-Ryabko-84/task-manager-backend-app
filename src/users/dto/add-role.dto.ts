import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'USER', description: 'User Role' })
  @IsString({ message: 'should be a string' })
  readonly value: string;

  @ApiProperty({ example: '1', description: 'User ID' })
  @IsNumber({}, { message: 'should be a number' })
  readonly userId: number;
}
