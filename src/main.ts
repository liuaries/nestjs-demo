import { HttpExceptionFilter } from './infrastructure/filter/httpException';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { logger } from './infrastructure/middleware/logger.middleware';
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
  // 全局注册错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
