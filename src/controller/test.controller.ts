import { Controller, UseGuards, Get, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Session } from 'src/infrastructure/decorator/session.decorator';
import { Users } from './../entity/user.entity';
import { UserService } from './../service/user.service';

// @UseGuards(AuthGuard())
@Controller('test')
export class TestController {
  constructor(
    private readonly userService: UserService
  ){}

  @Get('/query/current/user')
  queryCurrentUser(@Session() sessionUser: Users) {
    console.log(sessionUser)
  }

  @Post('/queryAllUsers')
  async queryAllUsers() {
    return await this.userService.findAll()
  }
}
