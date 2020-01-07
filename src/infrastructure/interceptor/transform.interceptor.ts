import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface BaseResponse<T> {
  code: number;
  data: T;
  success: boolean;
  message: string;
}

export class TransformInterceptor<T>
  implements NestInterceptor<T, BaseResponse<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<BaseResponse<T>> | Promise<Observable<BaseResponse<T>>> {
    return next.handle().pipe(
      map(data => {
        return {
          code: 0,
          data,
          message: '请求成功',
          success: true,
        };
      }),
    );
  }
}
