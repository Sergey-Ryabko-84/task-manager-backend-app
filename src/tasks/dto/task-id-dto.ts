import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class TaskIdDto {
  @ApiProperty({ example: '1', description: 'Task ID' })
  @IsNumber({}, { message: 'should be a number' })
  readonly id: number;
}
