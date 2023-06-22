import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CategoryIdDto {
  @ApiProperty({ example: '1', description: 'Category ID' })
  @IsNumber({}, { message: 'should be a number' })
  readonly id: number;
}
