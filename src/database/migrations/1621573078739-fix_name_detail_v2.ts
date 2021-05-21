import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNameDetailV21621573078739 implements MigrationInterface {
    name = 'fixNameDetailV21621573078739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "lastname" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_details" ALTER COLUMN "lastname" SET NOT NULL`);
    }

}
