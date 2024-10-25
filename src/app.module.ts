import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EdgesModule } from './graphql/edges.module'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppDataSource } from './datasource.config'
import { Edge } from './graphql/entities/edge.entity'

@Module({
  imports: [
    EdgesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      entities: [Edge],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
