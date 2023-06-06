import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'long_table_name_sample_case_sample' })
export class TooLongTableColumnNameSample {
	@PrimaryGeneratedColumn()
	readonly long_column_name_sample_case_sample?: number;
}
