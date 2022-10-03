import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateMainCriteriaSurveyDto } from './dtos/create-main-criteria-survey.dto';
import { MainCriteria } from './entitys/maincriteria.entity';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private surveyService: SurveyService) {}
  @Post()
  @UsePipes(ValidationPipe)
  createSurvey(
    @Body() createMainCriteriaSurveyDto: CreateMainCriteriaSurveyDto,
  ): Promise<MainCriteria> {
    return this.surveyService.createSurvey(createMainCriteriaSurveyDto);
  }
}
