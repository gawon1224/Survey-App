import { IsNotEmpty } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class CreateSurveyDto {
  user_id = uuidv4();

  @IsNotEmpty()
  q1: number;

  @IsNotEmpty()
  q2: number;

  @IsNotEmpty()
  q3: number;
}
