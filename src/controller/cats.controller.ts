import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { Cat } from './../service/interfaces/cat.interface';
import { CatsService } from './../service/cats.service';
import { CreateCatDto } from './../dto/create-cat.dto';

@ApiBearerAuth()
@ApiTags('CatsController')
@UseGuards(AuthGuard())
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: '添加猫' })
  @Post('/create')
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @ApiOperation({ summary: '查询猫列表' })
  @Post('/queryAll')
  findAll() {
    return this.catsService.findAll();
  }
}
