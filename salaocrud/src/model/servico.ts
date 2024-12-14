import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Servico") // Nome da tabela "Servico"
export class Servico {
  @PrimaryGeneratedColumn({ name: "idServico" }) // Nome da coluna "idServico"
  idServico!: number;

  @Column({ type: "varchar", length: 45, nullable: false })
  nome!: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  descricao!: string;

  @Column("decimal", { precision: 6, scale: 2, nullable: false })
  valor!: number;


  constructor(nome: string, descricao: string, valor: number, idServico?: number) {
    if (idServico) {
      this.idServico = idServico;
    }
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
  }
}