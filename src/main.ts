import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { logger } from './infrastructure/middleware/logger.middleware';
import { ResponseErrorExceptionFilter } from './infrastructure/filter/response.error.exception.filter';
import { ResponseSuccessTransformInterceptor } from './infrastructure/interceptor/response.success.transform.interceptor';
import { ParamsValidationPipe } from './infrastructure/pipe/params.validation.pipe';

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
  app.useGlobalPipes(new ParamsValidationPipe());
  app.useGlobalFilters(new ResponseErrorExceptionFilter());
  app.useGlobalInterceptors(new ResponseSuccessTransformInterceptor());
  await app.listen(3000);
}
bootstrap();
