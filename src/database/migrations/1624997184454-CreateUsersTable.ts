import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1624997184454 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          { name: "firstName", type: "varchar", isNullable: false },
          { name: "lastName", type: "varchar", isNullable: false },
          { name: "password", type: "varchar", isNullable: false },
          { name: "email", type: "varchar", isNullable: false },
          { name: "photo_url", type: "nvarchar", isNullable: true },
          { name: "birthDate", type: "timestamp", isNullable: false },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
