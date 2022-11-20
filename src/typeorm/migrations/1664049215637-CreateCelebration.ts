import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCelebration1664049215637 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'celebration',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'day',
                    type: 'Date',
                },
                {
                    name: 'hour',
                    type: 'int',
                },
                {
                    name: 'solemnitie',
                    type: 'varchar'
                },
                {
                    name: 'confirm_celebration',
                    type: 'int'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
