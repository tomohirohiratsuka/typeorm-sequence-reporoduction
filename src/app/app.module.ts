import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { getMetadataArgsStorage } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import 'source-map-support/register';
import { SampleModule } from '@src/sample/sample.module';

@Module({
	controllers: [AppController],
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: () => {
				return {
					database: process.env.POSTGRES_DB,
					entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
					host: process.env.POSTGRES_HOST,
					password: process.env.POSTGRES_PASSWORD,
					port: process.env.POSTGRES_PORT,
					synchronize: process.env.DB_SYNC === 'true',
					type: process.env.DB_TYPE,
					username: process.env.POSTGRES_USER,
				} as TypeOrmModuleAsyncOptions;
			},
		}),
		LoggerModule.forRoot({
			pinoHttp: {
				customProps: () => ({
					context: 'HTTP',
				}),
				serializers: {
					req: (req) => {
						req.body = req.raw.body;
						return req;
					},
				},
				transport: {
					options: {
						singleLine: true,
					},
					target: 'pino-pretty',
				},
			},
		}),
		SampleModule,
	],
	providers: [AppService],
})
export class AppModule {}
