import { Module } from '@nestjs/common';
import { ModalsModule } from './modals/modals.module';

@Module({
  imports: [ModalsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
