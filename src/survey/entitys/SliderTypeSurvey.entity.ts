import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SliderTypeSurvey')
export class SliderTypeSurvey extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  mainCriteriaId: number;

  @Column()
  subCriteriaId: number;

  @Column()
  subCriteriaScore: number;
}
