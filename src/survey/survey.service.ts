import { Injectable } from '@nestjs/common';
import { CreateMainCriteriaSurveyDto } from './dtos/create-main-criteria-survey.dto';
import { MainCriteria } from './entitys/maincriteria.entity';
import { SurveyRepository } from './survey.repository';

@Injectable()
export class SurveyService {
  constructor(private surveyRepository: SurveyRepository) {}

  createSurvey(
    createMainCriteriaSurveyDto: CreateMainCriteriaSurveyDto,
  ): Promise<MainCriteria> {
    return this.surveyRepository.createMainCriteriaSurvey(
      createMainCriteriaSurveyDto,
    );
  }
}
