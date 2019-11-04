import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyService } from './survey.service';
import { Survey } from '../entities/survey';
import { SurveyResolver } from './survey.resolver';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Survey,
    ]),
    CommentModule,
  ],
  providers: [
    SurveyService,
    SurveyResolver,
  ],
  exports: [
    SurveyService,
  ],
})
export class SurveyModule {}
