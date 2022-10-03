import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { CreateMainCriteriaSurveyDto } from './dtos/create-main-criteria-survey.dto';
import { MainCriteria } from './entitys/maincriteria.entity';

@CustomRepository(MainCriteria)
export class SurveyRepository extends Repository<MainCriteria> {
  async createMainCriteriaSurvey(
    createMainCriteriaSurveyDto: CreateMainCriteriaSurveyDto,
  ): Promise<MainCriteria> {
    const { user_id, q1, q2, q3 } = createMainCriteriaSurveyDto;

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
