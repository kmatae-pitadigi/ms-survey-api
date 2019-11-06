import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyResolver } from './survey.resolver';
import { SurveyService } from './survey.service';
import { Survey } from '../entities/survey';
import { SurveyInput } from '../dto/survey-input';
import { SurveyResult } from '../dto/survey-result';
import { Comment } from '../entities/comment';
import { CommentModule } from '../comment/comment.module';

describe('SurveyResolver', () => {
  let service: SurveyService;
  let resolver: SurveyResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mongodb',
          url: process.env.DATABASE_URL_TEST,
          entities: [
            Survey,
            Comment,
          ],
          synchronize: false,
          useUnifiedTopology: true,
        }),
        TypeOrmModule.forFeature([
          Survey,
        ]),
        CommentModule,
      ],
      providers: [
        SurveyResolver,
        SurveyService,
      ],
    }).compile();

    service = module.get<SurveyService>(SurveyService);
    resolver = module.get<SurveyResolver>(SurveyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('save', () => {
    it('should return an survey', async () => {
      const survey: Survey = new Survey(undefined);
      jest.spyOn(service, 'save').mockImplementation((): Promise<Survey> => Promise.resolve(survey));

      const surveyInput: SurveyInput = new SurveyInput();
      const surveyResult: SurveyResult = new SurveyResult();
      surveyResult.result = 'OK';
      surveyResult.message = undefined;
      surveyResult.survey = new Survey(undefined);
      expect(await resolver.save(surveyInput)).toMatchObject(surveyResult);
    });
  });

  describe('findOne', () => {
    it('should return an survey', async () => {
      const survey: Survey = new Survey(undefined);
      jest.spyOn(service, 'findOne').mockImplementation(() => Promise.resolve(survey));

      expect(await resolver.findOne(undefined)).toMatchObject(survey);
    });
  });
});
