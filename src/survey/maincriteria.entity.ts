import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MainCriteria extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  q1: number;

  @Column()
  q2: number;

  @Column()
  q3: number;
}
