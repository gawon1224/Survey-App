import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSliderTypeSurveyDto } from '../dtos/create-slider-type-survey.dto';
import { SliderTypeSurvey } from '../entitys/SliderTypeSurvey.entity';
import { SliderTypeSurveyService } from './SliderTypeSurvey.service';

@Controller('slider-type-survey')
export class SliderTypeSurveyController {
  constructor(private surveyService: SliderTypeSurveyService) {}
  @Post()
  @UsePipes(ValidationPipe)
  createSliderTypeSurvey(
    @Body() createSurveyDto: CreateSliderTypeSurveyDto,
  ): Promise<SliderTypeSurvey> {
    return this.surveyService.createSliderTypeSurvey(createSurveyDto);
  }
}
