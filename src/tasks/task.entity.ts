import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: false })
  done: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  createdDate?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  completedDate?: Date;
}
