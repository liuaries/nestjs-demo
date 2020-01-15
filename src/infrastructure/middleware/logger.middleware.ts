import { Request, Response } from 'express';

export function logger(req: Request, res: Response, next) {
  console.log(`==========url:`, req.originalUrl);

  // console.log('============res:',res)
  next();
}
