import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCatDto {
  @MinLength(2, { message: 'name must not be to short' })
  @MaxLength(8, { message: 'name must not be to long' })
  @IsString({ message: 'name must be string' })
  @ApiProperty()
  readonly name: string;

  @IsInt({ message: 'age must be number' })
  @ApiProperty()
  readonly age: number;

  @IsString({ message: 'breed must be string' })
  @ApiProperty()
  readonly breed: string;
}
