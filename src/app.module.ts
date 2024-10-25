import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EdgesModule } from './edges/edges.module'
import {
  ApolloDriver,
  ApolloDriverConfig,
} from '@nestjs/apollo'

@Module({
  imports: [
    EdgesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>(
      {
        driver: ApolloDriver,
        autoSchemaFile: true,
        playground: true,
      }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
