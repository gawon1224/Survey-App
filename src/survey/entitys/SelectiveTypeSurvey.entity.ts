import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SelectiveTypeSurvey')
export class SelectiveTypeSurvey extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  selectiveCriteriaId: number;

  @Column()
  optionId: number;

  @Column()
  optionScore: number;
}
