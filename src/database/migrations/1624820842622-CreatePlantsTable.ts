import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlantsTable1624820842622 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "plants",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "popularName",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "scientificName",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "ambience",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "origin",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "climate",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "gender",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "plantImage",
            type: "nvarchar",
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("plants");
  }
}