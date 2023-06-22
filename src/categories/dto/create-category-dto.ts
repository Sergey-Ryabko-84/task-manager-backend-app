import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Developers', description: 'Category name' })
  @IsString({ message: 'should be a string' })
  readonly name: string;
}
