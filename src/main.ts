import { NestFactory } from '@nestjs/core';
import * as serveStatic from 'serve-static';
import { join } from 'path';
import { AppModule } from './app.module';
import { ApiExceptionFilter } from './util/apiException.filter';
import { ApiParamsValidationPipe } from './util/apiParamsValidation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局异常处理
  app.useGlobalFilters(new ApiExceptionFilter());
  app.useGlobalPipes(new ApiParamsValidationPipe());
  // 静态文件目录
  app.use('/public', serveStatic(join(__dirname, '../public'), {
    maxAge: '1d',
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
  }));
  await app.listen(3000);
}
bootstrap();
