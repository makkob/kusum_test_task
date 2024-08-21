import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: 'income' | 'expense';

  @Column('decimal')
  amount: number;

  @Column()
  category: string;

  @Column('timestamp')
  date: Date;
}

