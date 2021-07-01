import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAdminUserTable1625103199513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "adminUsers",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          { name: "username", type: "varchar", isNullable: false },
          { name: "password", type: "varchar", isNullable: false },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: true,
          }
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("adminUsers");
  }
}
