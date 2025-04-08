import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'Ishaan@123',
    database: process.env.DB_NAME || 'bookstore',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
};
  