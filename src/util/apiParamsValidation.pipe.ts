import {
  ArgumentMetadata,
  PipeTransform,
  Injectable,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { ApiExceptionFilter } from './apiException.filter';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ApiParamsValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata;

    // 如果参数不是 类 而是普通的 JavaScript 对象则不进行验证
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    // 通过元数据和对象实例，去构建原有类型
    const object = plainToClass(metatype, value);
    const errors = await validate(object);

    if (errors.length > 0) {
      const res = { abcdefg: '参数错误！' };
      throw new HttpException(res, 400);
    }

    return value;
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
  }
}
