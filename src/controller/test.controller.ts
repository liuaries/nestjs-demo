import { SessionUser } from './../infrastructure/decorator/session.decorator';
import { LoggingInterceptor } from './../infrastructure/interceptor/logging.interceptor';
import { Controller, UseGuards, Get, Post, UseInterceptors, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Users } from './../entity/user.entity';
import { UserService } from './../service/user.service';
import { ConfigService } from 'src/service/config.service';

// @UseGuards(AuthGuard())
@UseInterceptors(new LoggingInterceptor())
@Controller('test')
export class TestController {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService
  ){}

  @Get('/query/current/user')
  queryCurrentUser(@SessionUser() user) {
    console.log(user)
  }

  @Post('/queryAllUsers')
  // @UseGuards(AuthGuard())
  async queryAllUsers() {
    console.log(this.configService.getString('dbHost'))
    return await this.userService.findAll()
  }
}
