import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppDataSource } from './db/datasource.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await AppDataSource.initialize()
  await app.listen(process.env.PORT ?? 3000)
  console.log(
    'Running on port 3000. DB initialized:',
    AppDataSource.isInitialized
  )
}
bootstrap()
