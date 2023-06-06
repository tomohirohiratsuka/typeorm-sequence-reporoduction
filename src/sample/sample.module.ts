import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TooLongTableColumnNameSample } from '@src/sample/entity/TooLongTableColumnNameSample.entity';
import { TooLongTableNameSample } from '@src/sample/entity/TooLongTableNameSample.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			TooLongTableNameSample,
			TooLongTableColumnNameSample,
			TooLongTableColumnNameSample,
		]),
	],
})
export class SampleModule {}
