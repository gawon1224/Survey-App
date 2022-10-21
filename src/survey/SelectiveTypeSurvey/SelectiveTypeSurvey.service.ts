import { Injectable } from '@nestjs/common';
import { CreateSelectiveTypeSurveyDto } from '../dtos/create-selective-type-survey.dto';
import { SelectiveTypeSurvey } from '../entitys/SelectiveTypeSurvey.entity';
import { SelectiveTypeSurveyRepository } from './SelectiveTypeSurvey.repository';

@Injectable()
export class SelectiveTypeSurveyService {
  constructor(private surveyRepository: SelectiveTypeSurveyRepository) {}

  createSelectiveTypeSurvey(
    createSurveyDto: CreateSelectiveTypeSurveyDto,
  ): Promise<SelectiveTypeSurvey> {
    return this.surveyRepository.createSelectiveTypeSurvey(createSurveyDto);
  }
}
