import { ApiProperty } from '@nestjs/swagger';

export class createCategoryDto {
  @ApiProperty({ example: 'Developers', description: 'Category name' })
  readonly name: string;

  @ApiProperty({ example: '1', description: 'User ID' })
  readonly userId: number;
}
