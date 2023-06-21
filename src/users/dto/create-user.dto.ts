import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'developer@mail.com', description: 'Email' })
  @IsString({ message: 'should be a string' })
  @IsEmail({}, { message: 'invalid email' })
  readonly email: string;

  @ApiProperty({ example: 'qvX!8T)3-D', description: 'Password' })
  @IsString({ message: 'should be a string' })
  @Length(4, 16, { message: 'length should be between 4 and 16 characters' })
  readonly password: string;
}
