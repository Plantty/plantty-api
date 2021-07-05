import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCommentTable1625353816944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'comments',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true
                },
                {
                    name: 'message',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    isNullable: false
                },
                {
                    name: 'plantId',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'userId',
                    type: 'varchar',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
