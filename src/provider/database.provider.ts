import { createConnection } from 'typeorm';
import { common } from '../config/app.config';
import { Users } from './../entity/user.entity';


export const databaseProvider = [
  {
    provide: 'CommonConnection',
    useFactory: async () =>
      await createConnection({
        type: 'mongodb',
        host: common.dbHost,
        port: common.dbPort,
        username: common.dbUser,
        password: common.dbPwd,
        database: common.dbName,
        entities: [Users],
        useUnifiedTopology: true,
      }),
  },
];