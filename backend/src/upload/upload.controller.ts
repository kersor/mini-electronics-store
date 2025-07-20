import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('photo')
  @UseInterceptors(
    FileInterceptor(
      'photo', {
        storage: diskStorage({
          destination: "./uploads",
          filename: function (req, file, cb) {
            const newPhotoName = uuidv4() 
            cb(null, newPhotoName + extname(file.originalname))
          }
        })
      }
      
    )
  )
  async uploadPhoto(@UploadedFile() photo: Express.Multer.File) {
    return {
      url: photo.filename
    }
  }
}
