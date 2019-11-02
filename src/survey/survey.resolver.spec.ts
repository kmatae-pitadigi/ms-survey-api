import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyResolver } from './survey.resolver';
import { SurveyService } from './survey.service';
import { Survey } from '../entities/survey';

describe('SurveyResolver', () => {
  let resolver: SurveyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mongodb',
          url: process.env.DATABASE_URL,
          entities: [
            Survey,
          ],
          synchronize: false,
          useUnifiedTopology: true,
        }),
        TypeOrmModule.forFeature([
          Survey,
        ]),
      ],
      providers: [
        SurveyResolver,
        SurveyService,
      ],
    }).compile();

    resolver = module.get<SurveyResolver>(SurveyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
