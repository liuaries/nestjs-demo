import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { logger } from './infrastructure/middleware/logger.middleware';
import { HttpExceptionFilter } from './infrastructure/filter/httpException';
import { TransformInterceptor } from './infrastructure/interceptor/transform.interceptor';

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
  app.useGlobalFilters(new HttpExceptionFilter());// 全局注册错误的过滤器
  app.useGlobalInterceptors(new TransformInterceptor());// 全局注册拦截器
  await app.listen(3000);
}
bootstrap();
