import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';
import * as hash from 'object-hash';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null, 'public/pic');
      },
      filename: (req, file, cb) => {
          const fileHash = hash(file);
          const fileExtname = extname(file.originalname);
          const resName = `${fileHash}${fileExtname}`;
          cb(null, resName);
      },
  }),
    // dest: 'public/pic',
  }))
  UploadedFile(@UploadedFile() file) {
    return {pic: file.filename};
  }
}
