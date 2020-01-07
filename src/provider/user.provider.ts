import { Connection, getMongoRepository } from 'typeorm';
import { Users } from '../entity/user.entity';

export const userProvider = [
  {
    provide: 'UserRepository',
    useFactory: (connection: Connection) =>
      connection.getMongoRepository(Users),
    inject: ['CommonConnection'],
  },
];
