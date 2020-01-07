import { ApiParamsValidationPipe } from './infrastructure/pipe/api.params.validation.pipe';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { logger } from './infrastructure/middleware/logger.middleware';
import { ResponseErrorExceptionFilter } from './infrastructure/filter/response.error.exception.filter';
import { ResponseSuccessTransformInterceptor } from './infrastructure/interceptor/response.success.transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('awn-grass server')
    .setDescription('the awn-grass api')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.use(logger);
  app.enableCors();
  app.useGlobalPipes(new ApiParamsValidationPipe());
  app.useGlobalFilters(new ResponseErrorExceptionFilter());// 全局注册错误的过滤器
  app.useGlobalInterceptors(new ResponseSuccessTransformInterceptor());// 全局注册拦截器
  await app.listen(3000);
}
bootstrap();
