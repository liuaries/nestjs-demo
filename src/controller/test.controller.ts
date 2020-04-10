import { Controller, UseGuards, Get, Post, UseInterceptors, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { EmailService } from './../service/email.service';
import { SessionUser } from './../infrastructure/decorator/session.decorator';
import { LoggingInterceptor } from './../infrastructure/interceptor/logging.interceptor';
import { Users } from './../entity/user.entity';
import { UserService } from './../service/user.service';
import { ConfigService } from 'src/service/config.service';

// @UseGuards(AuthGuard())
// @UseInterceptors(new LoggingInterceptor())
@Controller('test')
export class TestController {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly emailSerice: EmailService,
  ){}

  @Get('/query/current/user')
  queryCurrentUser(@SessionUser() user) {
    console.log(user)
  }

  @Post('/queryAllUsers')
  // @UseGuards(AuthGuard())
  async queryAllUsers() {
    return await this.userService.findAll()
  }

  @Post('/sendEmail')
  async sendEmail() { 
    return await this.emailSerice.sendEmail({
      transport: 'smtp',
      target: '19941558406@163.com,447092991@qq.com',
      title: 'test2',
      html: `<p>你好</p><p>欢迎访问jackson影琪</p><p>点击下面链接进入访问吧：</p><p><a href='https://www.cnblogs.com/jackson-zhangjiang/'>https://www.cnblogs.com/jackson-zhangjiang/</a></p>`,
      attachments: [{
        filename: '一种基于Docker镜像元数据管理的持续发布系统.docx',
        path: 'https://common.ihomefnt.com/nor/wework/constructionReform/3008897582561d71b7128c3ddf15651ccf687d4f9648f3c764711e6070d74f04.docx'
      }]
    })
  }
}
