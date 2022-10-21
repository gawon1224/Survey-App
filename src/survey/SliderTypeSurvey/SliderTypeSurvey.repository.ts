import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { CreateSliderTypeSurveyDto } from '../dtos/create-slider-type-survey.dto';
import { SliderTypeSurvey } from '../entitys/SliderTypeSurvey.entity';

@CustomRepository(SliderTypeSurvey)
export class SliderTypeSurveyRepository extends Repository<SliderTypeSurvey> {
  async createSliderTypeSurvey(
    createSurveyDto: CreateSliderTypeSurveyDto,
  ): Promise<SliderTypeSurvey> {
    const { userId, mainCriteriaId, subCriteriaId, subCriteriaScore } =
      createSurveyDto;

    const survey = this.create({
      userId,
      mainCriteriaId,
      subCriteriaId,
      subCriteriaScore,
    });

    await this.save(survey);
    return survey;
  }
}
