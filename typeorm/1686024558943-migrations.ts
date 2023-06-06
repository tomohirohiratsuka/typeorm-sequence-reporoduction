import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1686024558943 implements MigrationInterface {
    name = 'Migrations1686024558943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "too_long_table_name_sample_ca_id_seq" OWNED BY "too_long_table_name_sample_case_sample_case_sample_case_sa"."id"`);
        await queryRunner.query(`ALTER TABLE "too_long_table_name_sample_case_sample_case_sample_case_sa" ALTER COLUMN "id" SET DEFAULT nextval('"too_long_table_name_sample_ca_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "too_long_table_name_sample_case_sample_case_sample_case_sa" ALTER COLUMN "id" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "too_long_table_name_sample_case_sample_case_sample_case_sa" ALTER COLUMN "id" SET DEFAULT nextval('too_long_table_name_sample_case_sample_case_sample_case__id_seq')`);
        await queryRunner.query(`ALTER TABLE "too_long_table_name_sample_case_sample_case_sample_case_sa" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "too_long_table_name_sample_ca_id_seq"`);
    }

}
