import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @Length(2, 8, { message: '名称必须2到8字符' })
  @IsString({ message: '名称必须是字符类型' })
  @IsNotEmpty({ message: '名称不可为空' })
  @ApiProperty({ example: '小黑', description: '名称' })
  readonly name: string;

  @IsInt({ message: '年龄必须是数字' })
  @IsNotEmpty({ message: '年龄不可为空' })
  @ApiProperty({ example: 2, description: '年龄' })
  readonly age: number;

  @IsString({ message: '品种必须是字符' })
  @IsNotEmpty({ message: '品种不可为空' })
  @ApiProperty({ example: '泰迪', description: '品种' })
  readonly breed: string;
}
