import process, { cwd } from 'process';

import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config();
const options: DataSourceOptions = {
	database: process.env.POSTGRES_DB || 'postgres',
	entities: [cwd() + '/**/*.entity.ts'],
	extra: {
		timezone: 'Asia/Tokyo',
	},
	host: process.env.POSTGRES_HOST || '0.0.0.0',

	logging: false,

	migrations: [cwd() + '/typeorm/**/*.ts'],

	migrationsRun: true,

	password: process.env.POSTGRES_PASSWORD || 'supersecretpassword',

	port: Number(process.env.POSTGRES_PORT) || 5432,

	subscribers: ['src/subscribers/**/*.ts'],

	// synchronize: eval(process.env.DB_SYNC) || true, // DO NOT USE IN PRODUCTION, USE MIGRATION INSTEAD
	synchronize: false,
	type: 'postgres',
	username: process.env.POSTGRES_USER || 'postgres',
};

const AppDataSource = new DataSource(options);

export default AppDataSource;
