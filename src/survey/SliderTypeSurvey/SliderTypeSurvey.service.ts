import { Injectable } from '@nestjs/common';
import { CreateSliderTypeSurveyDto } from '../dtos/create-slider-type-survey.dto';
import { SliderTypeSurvey } from '../entitys/SliderTypeSurvey.entity';
import { SliderTypeSurveyRepository } from './SliderTypeSurvey.repository';

@Injectable()
export class SliderTypeSurveyService {
  constructor(private surveyRepository: SliderTypeSurveyRepository) {}

  createSliderTypeSurvey(
    createSurveyDto: CreateSliderTypeSurveyDto,
  ): Promise<SliderTypeSurvey> {
    return this.surveyRepository.createSliderTypeSurvey(createSurveyDto);
  }
}
