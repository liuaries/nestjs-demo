import { Controller, Body, Param, Get, Post, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Cat } from './../service/interfaces/cat.interface';
import { CatsService } from './../service/cats.service';
import { CreateCatDto } from './../dto/create-cat.dto';

@UseGuards(AuthGuard())
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService){}

  @Post('/create')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  @Post('/queryAll')
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}