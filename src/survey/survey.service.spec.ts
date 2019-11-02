import 'reflect-metadata';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyService } from './survey.service';
import { Survey } from '../entities/survey';

describe('SurveyService', () => {
  let service: SurveyService;

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
        SurveyService,
      ],
    }).compile();

    service = module.get<SurveyService>(SurveyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
