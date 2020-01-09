import { LoginUserInfoVO } from './../dto/response/user.vo';
import { Controller, Body, Post } from '@nestjs/common';
import { LoginReq } from '../dto/request/user.req';
import { AuthService } from './../service/auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('AuthController')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '登录' })
  @Post('login')
  async login(@Body() data: LoginReq): Promise<LoginUserInfoVO> {
    return await this.authService.login(data);
  }
}
