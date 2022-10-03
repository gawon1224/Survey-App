import { IsNotEmpty } from 'class-validator';
import { OneToOne, JoinColumn } from 'typeorm';
import { User } from '../entitys/user.entity';

export class CreateSubCriteria1SurveyDto {
  user_id: string;

  @IsNotEmpty()
  q1: number;

  @IsNotEmpty()
  q2: number;

  @IsNotEmpty()
  q3: number;

  @IsNotEmpty()
  q4: number;

  @IsNotEmpty()
  q5: number;

  @IsNotEmpty()
  q6: number;

  @IsNotEmpty()
  q7: number;

  @IsNotEmpty()
  q8: number;

  @IsNotEmpty()
  q9: number;

  @IsNotEmpty()
  q10: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
