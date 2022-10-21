import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/db/typeorm-ex.module';
import { SelectiveTypeSurveyRepository } from './SelectiveTypeSurvey/SelectiveTypeSurvey.repository';
import { SliderTypeSurveyRepository } from './SliderTypeSurvey/SliderTypeSurvey.repository';
import { SliderTypeSurveyController } from './SliderTypeSurvey/SliderTypeSurvey.controller';
import { SliderTypeSurveyService } from './SliderTypeSurvey/SliderTypeSurvey.service';
import { SelectiveTypeSurveyController } from './SelectiveTypeSurvey/SelectiveTypeSurvey.controller';
import { SelectiveTypeSurveyService } from './SelectiveTypeSurvey/SelectiveTypeSurvey.service';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([SliderTypeSurveyRepository]),
    TypeOrmExModule.forCustomRepository([SelectiveTypeSurveyRepository]),
  ],
  controllers: [SliderTypeSurveyController, SelectiveTypeSurveyController],
  providers: [SliderTypeSurveyService, SelectiveTypeSurveyService],
})
export class SurveyModule {}
