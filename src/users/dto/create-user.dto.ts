import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'developer@mail.com', description: 'Email' })
  readonly email: string;

  @ApiProperty({ example: 'qvX!8T)3-D', description: 'Password' })
  readonly password: string;
}
