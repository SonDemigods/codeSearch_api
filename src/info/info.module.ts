import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { Info } from './info.entity';

// 在Module的配置文件里配置对应的  controller  和  service
@Module({
  imports: [TypeOrmModule.forFeature([Info])],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
