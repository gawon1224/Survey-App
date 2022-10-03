import { IsNotEmpty } from 'class-validator';
import { OneToOne, JoinColumn } from 'typeorm';
import { User } from '../entitys/user.entity';

export class CreateMainCriteriaSurveyDto {
  user_id: string;

  @IsNotEmpty()
  q1: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
