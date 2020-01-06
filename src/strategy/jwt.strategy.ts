import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { secretKey } from './../config/app.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secretKey
        });
    }

    async validate(payload, done: VerifiedCallback) {
        console.log('-------payload:',payload)
        // const { name } = payload;
        // const entity = await this.userService.findByName(name);

        // if (!entity) {
        //     throw new UnauthorizedException('没找到用户。');
        // }
        return {...payload};
    }
}