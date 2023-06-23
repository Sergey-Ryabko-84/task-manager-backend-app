import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class EditCategoryDto {
  @ApiProperty({ example: 'Developers', description: 'Category name' })
  @IsString({ message: 'should be a string' })
  readonly name: string;

  @ApiProperty({ example: '1', description: 'Category ID' })
  @IsNumber({}, { message: 'should be a number' })
  readonly id: number;
}
