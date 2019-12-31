import {
  Get,
  Post,
  Put,
  Delete,
  Controller,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoDto } from './info.dto';

@Controller('Info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  getPage(@Query() info: object): Promise<any> {
    return this.infoService.getPage(info);
  }

  @Get(':id')
  getInfoById(@Param() info: object): Promise<any> {
    return this.infoService.getInfoById(info);
  }

  @Post()
  createInfo(@Body() info: any): Promise<any> {
    const {title, pic, type} = info;
    return this.infoService.createInfo({title, pic, type});
  }

  @Put()
  updateInfo(@Body() info: any): Promise<any> {
    return this.infoService.updateInfo(info);
  }

  @Delete()
  async deleteInfo(@Body() info: object): Promise<any> {
    return this.infoService.deleteInfo(info);
  }
}
