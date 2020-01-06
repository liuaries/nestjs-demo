import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './../controller/auth.controller';
import { AuthService } from './../service/auth.service';
import { secretKey } from './../config/app.config';
import { JwtStrategy } from './../strategy/jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
            privateKey: secretKey,
            signOptions: {
                expiresIn: '1h'
            }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}