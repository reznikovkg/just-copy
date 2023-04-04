import { Module } from '@nestjs/common';
import { lowdbProvider } from './lowdb.provider';

@Module({
  providers: [lowdbProvider],
  exports: [lowdbProvider],
})
export class LowdbModule {}
