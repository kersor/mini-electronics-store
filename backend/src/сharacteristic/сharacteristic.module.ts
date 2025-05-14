import { Module } from '@nestjs/common';
import { СharacteristicService } from './сharacteristic.service';
import { СharacteristicController } from './сharacteristic.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [СharacteristicController],
  providers: [СharacteristicService, PrismaService],
})
export class СharacteristicModule {}
