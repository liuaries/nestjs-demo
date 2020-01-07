import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @MinLength(4, { message: 'name must not be to short' })
  @MaxLength(12, { message: 'name must not be to long' })
  @IsString({ message: 'name must be string' })
  @ApiProperty({ name: '用户名' })
  readonly name: string;

  @IsString({ message: 'password must be string' })
  @ApiProperty({ name: '密码' })
  readonly password: string;
}
