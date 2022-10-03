import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subcriteria3')
export class SubCriteria3 extends BaseEntity {
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
}
