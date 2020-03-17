import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './module/auth.module';
import { DatabaseModule } from './Module/database.module';
import { defaultSgy } from './infrastructure/config/app.config';
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
    DatabaseModule,
    PassportModule.register({ defaultStrategy: defaultSgy }),
    // ScheduleModule.forRoot(),
    // TasksModule,
  ],
  controllers: [CatsController, TestController, UploadController ],
  providers: [CatsService, UserService, UploadService ],
})
export class AppModule {}
