import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
	name: 'too_long_table_name_sample_case_sample_case_sample_case_sa',
})
export class TooLongTableNameSample {
	@PrimaryGeneratedColumn()
	readonly id?: number;
}
