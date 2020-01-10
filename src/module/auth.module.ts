import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './../controller/auth.controller';
import { AuthService } from './../service/auth.service';
import { secretKey } from '../infrastructure/config/app.config';
import { JwtStrategy } from '../infrastructure/strategy/jwt.strategy';
import { UserProvider } from 'src/provider/user.provider';

@Module({
  imports: [
    JwtModule.register({
      privateKey: secretKey,
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [...UserProvider, AuthService, JwtStrategy],
})
export class AuthModule {}
