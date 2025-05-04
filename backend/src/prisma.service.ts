import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
    await this.role.createMany({
      data: [ 
        {title: "ADMIN", description: "Администратор"},
        {title: "USER", description: "Пользователь"}
      ],
      skipDuplicates: true
    })
  }
}
