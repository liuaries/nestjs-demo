import { Injectable, Inject } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { Users } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: MongoRepository<Users>,
  ) {}

  async findAll() {
    return await this.userRepository.findAndCount();
  }
}
