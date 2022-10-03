import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subcriteria1')
export class SubCriteria1 extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  q1: number;

  @Column()
  q2: number;

  @Column()
  q3: number;

  @Column()
  q4: number;

  @Column()
  q5: number;

  @Column()
  q6: number;

  @Column()
  q7: number;

  @Column()
  q8: number;

  @Column()
  q9: number;

  @Column()
  q10: number;
}
