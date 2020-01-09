import { Connection } from 'typeorm';
import { Users } from '../entity/user.entity';

export const UserProvider = [
  {
    provide: 'UserRepository',
    useFactory: (connection: Connection) =>
      connection.getMongoRepository(Users),
    inject: ['CommonConnection'],
  },
];
