import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './module/auth.module';
import { defaultSgy } from './infrastructure/config/app.config';
import { CatsService } from './service/cats.service';
import { CatsController } from './controller/cats.controller';
import { UserProvider } from './provider/user.provider';

@Module({
  imports: [
    AuthModule,
    PassportModule.register({ defaultStrategy: defaultSgy }),
  ],
  controllers: [CatsController],
  providers: [...UserProvider, CatsService],
})
export class AppModule {}
