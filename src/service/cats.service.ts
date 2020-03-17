import { Injectable, Inject } from '@nestjs/common';
import { CatVO } from 'src/dto/response/cat.vo';
import { MongoRepository } from 'typeorm';
import { Users } from './../entity/user.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: MongoRepository<Users>,
  ) {}

  private readonly cats: CatVO[] = [];

  create(cat: CatVO) {
    this.cats.push(cat);
  }

  findAll(): CatVO[] {
    return this.cats;
  }
}
