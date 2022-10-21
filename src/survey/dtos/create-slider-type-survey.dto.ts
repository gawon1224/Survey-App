import { IsNotEmpty } from 'class-validator';
import { OneToOne, JoinColumn } from 'typeorm';
import { User } from '../entitys/user.entity';

export class CreateSliderTypeSurveyDto {
  userId: string;

  @IsNotEmpty()
  mainCriteriaId: number;

  @IsNotEmpty()
  subCriteriaId: number;

  @IsNotEmpty()
  subCriteriaScore: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
