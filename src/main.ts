import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiExceptionFilter } from './util/apiException.filter';
import { ApiParamsValidationPipe } from './util/apiParamsValidation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局异常处理
  app.useGlobalFilters(new ApiExceptionFilter());
  app.useGlobalPipes(new ApiParamsValidationPipe());
  await app.listen(3000);
}
bootstrap();
