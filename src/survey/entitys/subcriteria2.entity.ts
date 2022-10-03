import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subcriteria2')
export class SubCriteria2 extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  q1: number;
}
