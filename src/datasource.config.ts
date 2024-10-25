import { DataSource } from 'typeorm'
import { Edge } from './edges/entities/edge.entity'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'demo_db',
  entities: [Edge],
  subscribers: [],
  synchronize: true,
  logging: true,
})
