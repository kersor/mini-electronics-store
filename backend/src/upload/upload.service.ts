import { Injectable, UploadedFile } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class UploadService {
    constructor (readonly prisma: PrismaService) {}
}
