import { IsString, IsInt, IsNotEmpty, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateInfoDto {
  // @Type(() => Number)
  // @IsInt({
  //   message: 'ID必须是整数',
  //   context: { errorCode: 400 },
  // })
  // @Min(1, {
  //   message: 'ID必须大于等于1',
  //   context: { errorCode: 400 },
  // })
  // readonly id: number;

  @IsNotEmpty({
    message: '标题是必不可少的',
    context: { errorCode: 400 },
  })
  @IsString({
    message: '标题是必不可少的',
    context: { errorCode: 400 },
  })
  readonly title: string;

  @IsNotEmpty({
    message: '图片是必不可少的',
    context: { errorCode: 400 },
  })
  // @IsString({
  //   message: '图片是必不可少的',
  //   context: { errorCode: 400 },
  // })
  readonly pic: string;

  // @Type(() => Number)
  // @IsInt({
  //   message: '类型必须是整数',
  //   context: { errorCode: 400 },
  // })
  // @Min(1, {
  //   message: '类型必须大于等于1',
  //   context: { errorCode: 400 },
  // })
  // readonly type: number;
}
