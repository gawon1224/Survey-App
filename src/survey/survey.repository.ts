import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { MainCriteria } from './maincriteria.entity';

@CustomRepository(MainCriteria)
export class SurveyRepository extends Repository<MainCriteria> {
  async createSurvey(createSurveyDto: CreateSurveyDto): Promise<MainCriteria> {
    const { user_id, q1, q2, q3 } = createSurveyDto;

    const survey = this.create({
      user_id,
      q1,
      q2,
      q3,
    });

    await this.save(survey);
    return survey;
  }
}
