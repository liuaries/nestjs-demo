import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongoRepository } from 'typeorm';
import { Users } from './../entity/user.entity';
import { LoginDto } from './../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly JwtService: JwtService,

    @Inject('UserRepository')
    private readonly userRepository: MongoRepository<Users>,
  ) {}

  async login(data: LoginDto) {
    const { name, password } = data;
    const entity = await this.userRepository.findOne({
      username: name,
      password: password,
    });

    if (!entity) {
      throw new UnauthorizedException('用户名或密码错误!');
    }

    const id = entity._id;
    const payload = { id, name };
    const token = this.signToken(payload);

    return {
      ...payload,
      token,
    };
  }

  signToken(data: JwtModule) {
    return this.JwtService.sign(data);
  }
}
