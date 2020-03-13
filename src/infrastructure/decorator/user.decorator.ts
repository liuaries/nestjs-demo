import { createParamDecorator } from '@nestjs/common';
import { Users } from '../../entity/user.entity';

export const User = createParamDecorator((data, req): Users => {
  return req.user;
});
