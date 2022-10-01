import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { MainCriteria } from './maincriteria.entity';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}
  @Post()
  @UsePipes(ValidationPipe)
  createSurvey(
    @Body() createSurveyDto: CreateSurveyDto,
  ): Promise<MainCriteria> {
    return this.surveyService.createSurvey(createSurveyDto);
  }
}
