import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SurveyService } from './survey.service';
import { ISurvey } from '../interfaces/isurvey.interface';
import { IResult } from '../interfaces/iresult.interface';
import { InsertResult } from 'typeorm';

@Resolver('Survey')
export class SurveyResolver {
    constructor(
        private readonly surveyService: SurveyService,
    ) {}

    @Mutation('saveSurvey')
    async save(@Args('survey') survey: ISurvey): Promise<IResult> {
        const ret: IResult = {result: undefined, message: undefined, body: undefined};

        try {
            // サーベイを保存する
            const saveSurvey: ISurvey = await this.surveyService.save(survey);
            ret.result = 'OK';
            ret.message = undefined;
            ret.body = saveSurvey;
        } catch (error) {
            ret.result = 'Error';
            ret.message = error.message;
            ret.body = undefined;
        }

        return ret;
    }
}
