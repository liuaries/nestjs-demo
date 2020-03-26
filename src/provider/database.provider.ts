import { createConnection } from 'typeorm';
import { Users } from './../entity/user.entity';
import { ConfigService } from 'src/service/config.service';

export const DatabaseProvider = 
{
  provide: 'CommonConnection',
  useFactory: async (config: ConfigService) =>
    await createConnection({
      type: 'mongodb',
      host: config.getString('dbHost'),
      port: config.getNumber('dbPort'),
      username: config.getString('dbUser'),
      password: config.getString('dbPwd'),
      database: config.getString('dbName'),
      entities: [Users],
      useUnifiedTopology: true,
      logging: ['query', 'error'],
      logger: 'file',
    }),
    inject: [ConfigService]
};

