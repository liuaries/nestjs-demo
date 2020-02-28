import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './module/auth.module';
import { DatabaseModule } from './Module/database.module';
import { defaultSgy } from './infrastructure/config/app.config';
import { CatsService } from './service/cats.service';
import { CatsController } from './controller/cats.controller';
import { UploadController } from './controller/upload.controller';
import { UserProvider } from './provider/user.provider';
import { TransformController } from './controller/transform.controller';
import { TransformService } from './service/transform.service';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    PassportModule.register({ defaultStrategy: defaultSgy }),
  ],
  controllers: [CatsController, UploadController, TransformController],
  providers: [...UserProvider, CatsService, TransformService],
})
export class AppModule {}
