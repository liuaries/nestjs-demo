import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCatDto {
  @MinLength(2, { message: 'name must not be to short' })
  @MaxLength(8, { message: 'name must not be to long' })
  @IsString({ message: 'name must be string' })
  @ApiProperty({ example: '小黑', description: '姓名' })
  readonly name: string;

  @IsInt({ message: 'age must be number' })
  @ApiProperty({ example: 2, description: '年龄' })
  readonly age: number;

  @IsString({ message: 'breed must be string' })
  @ApiProperty({ example: '泰迪', description: '品种' })
  readonly breed: string;
}
