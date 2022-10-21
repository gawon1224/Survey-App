import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateSelectiveTypeSurveyDto } from '../dtos/create-selective-type-survey.dto';
import { SelectiveTypeSurvey } from '../entitys/SelectiveTypeSurvey.entity';
import { SelectiveTypeSurveyService } from './SelectiveTypeSurvey.service';

@Controller('selective-type-survey')
export class SelectiveTypeSurveyController {
  constructor(private surveyService: SelectiveTypeSurveyService) {}
  @Post()
  @UsePipes(ValidationPipe)
  createSelectiveTypeSurvey(
    @Body() createSurveyDto: CreateSelectiveTypeSurveyDto,
  ): Promise<SelectiveTypeSurvey> {
    return this.surveyService.createSelectiveTypeSurvey(createSurveyDto);
  }
}
