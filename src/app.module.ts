import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EdgesModule } from './edges/edges.module';

@Module({
  imports: [EdgesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
