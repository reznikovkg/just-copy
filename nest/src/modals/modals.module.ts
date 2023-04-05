import { Module } from '@nestjs/common';
import { ModalsService } from './modals.service';
import { ModalsController } from './modals.controller';
import { LowdbModule } from '../lowdb/lowdb.module';

@Module({
  controllers: [ModalsController],
  providers: [ModalsService],
  imports: [LowdbModule],
})
export class ModalsModule {}
