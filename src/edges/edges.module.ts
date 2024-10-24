import { Module } from '@nestjs/common';
import { EdgesService } from './edges.service';
import { EdgesResolver } from './edges.resolver';

@Module({
  providers: [EdgesResolver, EdgesService],
})
export class EdgesModule {}
