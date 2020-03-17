import { createParamDecorator } from '@nestjs/common';
import { Users } from '../../entity/user.entity';

export const Session = createParamDecorator((data, req): Users => {
  return req.user;
});
