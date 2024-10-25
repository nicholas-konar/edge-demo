import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'demo_db',
  entities: ['src/db/entity/**/*.ts'],
  subscribers: [],
  synchronize: true,
  logging: true,
})
