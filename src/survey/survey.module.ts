import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/db/typeorm-ex.module';
import { SurveyController } from './survey.controller';
import { SurveyRepository } from './survey.repository';
import { SurveyService } from './survey.service';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([SurveyRepository])],
  controllers: [SurveyController],
  providers: [SurveyService],
})
export class SurveyModule {}
