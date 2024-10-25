import { Module } from '@nestjs/common'
import { EdgesService } from './edges.service'
import { EdgesResolver } from './edges.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Edge } from './entities/edge.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Edge])],
  providers: [EdgesResolver, EdgesService],
})
export class EdgesModule {}
