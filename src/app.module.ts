import { Module, CacheModule, CacheInterceptor, MiddlewareConsumer, RequestMethod, NestModule } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';

import { AuthModule } from './module/auth.module';
import { ConfigModule } from './module/config.module';
import { DEFAULT_SGY } from './infrastructure/constants';
import { CatsService } from './service/cats.service';
import { CatsController } from './controller/cats.controller';
import { TestController } from './controller/test.controller';
import { UploadController } from './controller/upload.controller';
import { TasksModule } from './module/tasks.mdoule';
import { UploadService } from './service/upload.service';
import { UserService } from './service/user.service';
 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  message: 'to many request from this ip, place try again later'
})

@Module({
  imports: [
    AuthModule,
    ConfigModule,
    CacheModule.register(),
    PassportModule.register({ defaultStrategy: DEFAULT_SGY }),
    ScheduleModule.forRoot(),
    TasksModule,
  ],
  controllers: [
    CatsController, 
    TestController, 
    UploadController
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    CatsService, 
    UserService, 
    UploadService 
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(limiter)
      .forRoutes({ path: 'auth', method: RequestMethod.ALL });
  }
}
