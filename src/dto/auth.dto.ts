import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @Length(4, 12, { message: '用户名必须是4到12个字符' })
  @IsString({ message: '用户名必须是字符串' })
  @IsNotEmpty({ message: '用户名不可为空' })
  @ApiProperty({ example: 'liuhui', description: '用户名' })
  readonly name: string;

  @IsString({ message: '密码必须是字符' })
  @IsNotEmpty({ message: '密码不可为空' })
  @ApiProperty({
    example: '$2b$10$InzTTbwNKuB4vQdpSUoMQ.z5TGJLd/em.FaTTxNnkyVMZkMoQRa82',
    description: '密码',
  })
  readonly password: string;
}
