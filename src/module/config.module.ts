import { Module, Global } from '@nestjs/common';
import { DatabaseProvider } from '../provider/database.provider';
import { ConfigService } from 'src/service/config.service';

@Global()
@Module({
  providers: [ConfigService, DatabaseProvider],
  exports: [ConfigService, DatabaseProvider],
})
export class ConfigModule {}
