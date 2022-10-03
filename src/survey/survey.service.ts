import { Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { MainCriteria } from './entitys/maincriteria.entity';
import { SurveyRepository } from './survey.repository';

@Injectable()
export class SurveyService {
  constructor(private surveyRepository: SurveyRepository) {}

  createSurvey(createSurveyDto: CreateSurveyDto): Promise<MainCriteria> {
    return this.surveyRepository.createSurvey(createSurveyDto);
  }
}
