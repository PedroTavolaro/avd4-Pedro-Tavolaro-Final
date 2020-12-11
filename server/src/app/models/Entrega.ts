import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import Funcionario from './Funcionario';
import Exame from './Exame';
import Agente from './Agente';
import Medico from './Medico';

@Entity('entregas')
class Entrega {
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @Column()
  funcionario_id: string;


  @Column()
  exame_id: string;

  @Column()
  agente_id: string;

  @Column()
  medico_id: string;

  @Column()
  descricaoPPP: string;

  @OneToOne(() => Funcionario)
  @JoinColumn({ name: 'funcionario_id' })
  funcionario: Funcionario;

  @OneToOne(() => Exame)
  @JoinColumn({ name: 'exame_id' })
  exame: Exame;

  @OneToOne(() => Agente)
  @JoinColumn({ name: 'agente_id' })
  agente: Agente;

  @OneToOne(() => Medico)
  @JoinColumn({ name: 'medico_id' })
  medico: Medico;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Entrega;
