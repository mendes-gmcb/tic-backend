import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOption1664119572764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'options',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'manual_organization',
                    type: 'int'
                },
                {
                    name: 'experience_organization',
                    type: 'int'
                },
                {
                    name: 'form_team',
                    type: 'int'
                },
                {
                    name: 'set_interval',
                    type: 'int'
                },
                {
                    name: 'various_scales',
                    type: 'int'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
