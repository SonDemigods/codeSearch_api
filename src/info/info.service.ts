import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Info } from './info.entity';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info)
    private readonly InfoRepository: Repository<Info>,
  ) {}
  async getPage(info: any): Promise<{}> {
    // 查询条件
    const { page = 1, pageSize = 10, keyword = '' } = info;
    // 分页
    const pageInt = parseInt(page, 10);
    let whereData = {};
    // 关键字
    if (keyword) {
      whereData = { title: Like(`%${keyword}%`) };
    }
    const data = await this.InfoRepository.find({
      skip: pageSize * (pageInt - 1),
      take: pageSize,
      where: [whereData],
      order: {
        id: 'DESC',
      },
    });

    const total = await this.InfoRepository.count({
      where: [whereData],
    });

    return { data, current: pageInt, total };
  }

  async getInfoById(info: object): Promise<{}> {
    return await this.InfoRepository.findOne(info);
  }

  async createInfo(info: object): Promise<{}> {
    return await this.InfoRepository.save(info);
  }

  async updateInfo(info: Info): Promise<{}> {
    return await this.InfoRepository.update(info.id, info);
  }

  async deleteInfo(info: object): Promise<{}> {
    const item: any = await this.getInfoById(info);
    return await this.InfoRepository.remove(item);
  }
}
