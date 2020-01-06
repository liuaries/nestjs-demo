import { Controller, Body, Post } from '@nestjs/common';
import { LoginDto } from './../dto/auth.dto';
import { AuthService } from './../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: LoginDto) {
    return await this.authService.login(data);
  }
}
