import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

// 在Module的配置文件里配置对应的  controller  和  service
@Module({
  imports: [],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
