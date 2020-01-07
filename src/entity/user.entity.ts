import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Users {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  token: string;

  @Column()
  apiToken: string;

  @Column()
  teams: Array<{
    _id: ObjectID;
    name: String;
    icon: String;
    role: {
      type: String;
      enum: ['owner', 'manager', 'guest'];
    };
  }>;

  @Column()
  mobile: String;

  @Column()
  qq: String;

  @Column()
  company: String;

  @Column()
  career: String;
}
