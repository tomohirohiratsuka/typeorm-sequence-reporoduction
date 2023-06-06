import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb' })
export class TooLongTableNameSample {
	@PrimaryGeneratedColumn()
	readonly too_long_column_name_sample_case_sample_case_sample_case_s?: number;
}
