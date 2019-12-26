import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoModule } from './info/info.module';

@Module({
  imports: [TypeOrmModule.forRoot(), InfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
