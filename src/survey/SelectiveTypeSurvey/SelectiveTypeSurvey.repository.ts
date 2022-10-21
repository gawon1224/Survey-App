import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { CreateSelectiveTypeSurveyDto } from '../dtos/create-selective-type-survey.dto';
import { SelectiveTypeSurvey } from '../entitys/SelectiveTypeSurvey.entity';

@CustomRepository(SelectiveTypeSurvey)
export class SelectiveTypeSurveyRepository extends Repository<SelectiveTypeSurvey> {
  async createSelectiveTypeSurvey(
    createSurveyDto: CreateSelectiveTypeSurveyDto,
  ): Promise<SelectiveTypeSurvey> {
    const { userId, selectiveCriteriaId, optionId, optionScore } =
      createSurveyDto;

    const survey = this.create({
      userId,
      selectiveCriteriaId,
      optionId,
      optionScore,
    });

    await this.save(survey);
    return survey;
  }
}
