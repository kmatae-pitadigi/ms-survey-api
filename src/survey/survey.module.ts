import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyService } from './survey.service';
import { Survey } from '../entities/survey';
import { SurveyResolver } from './survey.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Survey,
    ]),
  ],
  providers: [
    SurveyService,
    SurveyResolver,
  ],
})
export class SurveyModule {}
