import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { Task } from './tasks/task.entity';

dotenv.config();

const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'pm_todo',
  entities: [Task],
  synchronize: true,
};

export default config;
