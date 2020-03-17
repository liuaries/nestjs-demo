import { Module, Global } from '@nestjs/common';
import { databaseProvider } from './../provider/database.provider';

@Global()
@Module({
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class DatabaseModule {}
