import { DatabaseModule } from './database.module';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './../controller/auth.controller';
import { AuthService } from './../service/auth.service';
import { secretKey } from './../config/app.config';
import { JwtStrategy } from './../strategy/jwt.strategy';
import { userProvider } from 'src/provider/user.provider';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      privateKey: secretKey,
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [...userProvider, AuthService, JwtStrategy],
})
export class AuthModule {}
