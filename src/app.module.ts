import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './module/auth.module';
import { defaultSgy } from './config/app.config';
import { CatsService } from './service/cats.service';
import { CatsController } from './controller/cats.controller';


@Module({
  imports: [
    AuthModule,
    PassportModule.register({defaultStrategy: defaultSgy})
  ],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
