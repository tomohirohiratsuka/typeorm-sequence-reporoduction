import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1686024527417 implements MigrationInterface {
    name = 'Migrations1686024527417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb" ("too_long_column_name_sample_case_sample_case_sample_case_s" SERIAL NOT NULL, CONSTRAINT "PK_b3cd179d7812f42a607164fa77a" PRIMARY KEY ("too_long_column_name_sample_case_sample_case_sample_case_s"))`);
        await queryRunner.query(`CREATE TABLE "too_long_table_name_sample_case_sample_case_sample_case_sa" ("id" SERIAL NOT NULL, CONSTRAINT "PK_023e6ced597e14543e470041889" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "long_table_name_sample_case_sample" ("long_column_name_sample_case_sample" SERIAL NOT NULL, CONSTRAINT "PK_bd252d5a1d9d3b5e1e54f8c5311" PRIMARY KEY ("long_column_name_sample_case_sample"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "long_table_name_sample_case_sample"`);
        await queryRunner.query(`DROP TABLE "too_long_table_name_sample_case_sample_case_sample_case_sa"`);
        await queryRunner.query(`DROP TABLE "tb"`);
    }

}
