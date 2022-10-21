import { IsNotEmpty } from 'class-validator';
import { OneToOne, JoinColumn } from 'typeorm';
import { User } from '../entitys/user.entity';

export class CreateSelectiveTypeSurveyDto {
  userId: string;

  @IsNotEmpty()
  selectiveCriteriaId: number;

  @IsNotEmpty()
  optionId: number;

  @IsNotEmpty()
  optionScore: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
