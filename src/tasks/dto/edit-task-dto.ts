import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsString } from 'class-validator';

export class EditTaskDto {
  @ApiProperty({ example: '1', description: 'Task ID' })
  @IsNumber({}, { message: 'should be a number' })
  readonly id: number;

  @ApiProperty({ example: 'Fix phone input field', description: 'Task name' })
  @IsString({ message: 'should be a string' })
  readonly name: string;

  @ApiProperty({ example: '16.07.2023', description: 'Task start date' })
  @IsDateString({}, { message: 'should be a date' })
  readonly dateStart: string;

  @ApiProperty({ example: '22.07.2023', description: 'Task end date' })
  @IsDateString({}, { message: 'should be a date' })
  readonly dateEnd: string;
}
