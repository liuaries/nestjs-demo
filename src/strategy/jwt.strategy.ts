import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { MongoRepository } from 'typeorm';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { secretKey } from './../config/app.config';
import { Users } from './../entity/user.entity';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: MongoRepository<Users>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretKey,
    });
  }

  async validate(payload, done: VerifiedCallback) {
    const { name } = payload;
    const entity = await this.userRepository.findOne({username: name})

    if (!entity) {
        throw new UnauthorizedException('没找到用户!');
    }
    return { ...payload };
  }
}
