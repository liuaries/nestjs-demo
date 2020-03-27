import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_INTERCEPTOR } from '@nestjs/core';
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
export class AppModule {}
