import { Controller, Body, Post } from '@nestjs/common';
import { LoginDto } from './../dto/auth.dto';
import { AuthService } from './../service/auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Validate } from 'class-validator';

@ApiTags('AuthController')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: '登录' })
  @Post('login')
  async login(@Body() data: LoginDto) {
    return await this.authService.login(data);
  }
}
