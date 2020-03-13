import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ScheduleModule } from '@nestjs/schedule';

import { AuthModule } from './module/auth.module';
import { DatabaseModule } from './Module/database.module';
import { defaultSgy } from './infrastructure/config/app.config';
import { CatsService } from './service/cats.service';
import { CatsController } from './controller/cats.controller';
import { UploadController } from './controller/upload.controller';
import { UserProvider } from './provider/user.provider';
import { TasksModule } from './module/tasks.mdoule';
import { UploadService } from './service/upload.service';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    PassportModule.register({ defaultStrategy: defaultSgy }),
    ScheduleModule.forRoot(),
    TasksModule
  ],
  controllers: [CatsController, UploadController ],
  providers: [...UserProvider, CatsService, UploadService ]
})
export class AppModule {}
