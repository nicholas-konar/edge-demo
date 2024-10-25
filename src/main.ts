import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppDataSource } from './datasource.config'

async function bootstrap() {
  await AppDataSource.initialize()
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.PORT ?? 3000)
  console.log(
    'Running on port 3000. DB initialized:',
    AppDataSource.isInitialized
  )
}
bootstrap()
