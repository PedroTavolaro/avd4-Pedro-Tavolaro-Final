import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CriarEntrega1607642658621 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'entregas',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },

          {
            name: 'funcionario_id',
            type: 'uuid',
            isNullable: true,
          },

          {
            name: 'exame_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'agente_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'medico_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'descricaoPPP',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('entregas');
  }
}

