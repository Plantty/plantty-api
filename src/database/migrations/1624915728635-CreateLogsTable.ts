import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLogsTable1624915728635 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "logs",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isUnique: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "plant",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "admin",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "editType",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "editDate",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
