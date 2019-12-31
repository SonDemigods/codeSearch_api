import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoModule } from './info/info.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [TypeOrmModule.forRoot(), InfoModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
