import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @MinLength(4, { message: 'name must not be to short' })
  @MaxLength(12, { message: 'name must not be to long' })
  @IsString({ message: 'name must be string' })
  @ApiProperty({ example: 'liuhui', description: '姓名' })
  readonly name: string;

  @IsString({ message: 'password must be string' })
  @ApiProperty({ example: '$2b$10$InzTTbwNKuB4vQdpSUoMQ.z5TGJLd/em.FaTTxNnkyVMZkMoQRa82', description: '密码' })
  readonly password: string;
}
