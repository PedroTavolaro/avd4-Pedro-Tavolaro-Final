import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export default class CriarChavesEstrangeiras1607642722869 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'entregas',
      new TableForeignKey({
        name: 'FuncionarioEntregas',
        columnNames: ['funcionario_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'funcionarios',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'entregas',
      new TableForeignKey({
        name: 'ExameEntregas',
        columnNames: ['exame_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exames',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'entregas',
      new TableForeignKey({
        name: 'AgenteEntregas',
        columnNames: ['agente_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'agentes',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );


  await queryRunner.createForeignKey(
    'entregas',
    new TableForeignKey({
      name: 'MedicoEntregas',
      columnNames: ['medico_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'medicos',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }),
  );
}

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('entregas', 'FuncionarioEntregas');
    await queryRunner.dropForeignKey('entregas', 'ExameEntregas');
    await queryRunner.dropForeignKey('entregas', 'AgenteEntregas');
    await queryRunner.dropForeignKey('entregas', 'MedicoEntregas');
  }
}
