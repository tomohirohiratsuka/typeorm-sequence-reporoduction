import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
	name: 'too_long_table_name_sample_case_sample_case_sample_case_sample_case_s',
})
export class TooLongTableNameSampleCaseSampleCaseSampleCaseSampleCaseS {
	@PrimaryGeneratedColumn()
	readonly id?: number;
}
