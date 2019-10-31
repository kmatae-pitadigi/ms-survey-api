import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { SurveyService } from './survey.service';
import { SurveyInput } from '../dto/survey-input';
import { Survey } from '../entities/survey';
import { SurveyResult } from '../dto/survey-result';

@Resolver(of => Survey)
export class SurveyResolver {
    constructor(
        private readonly surveyService: SurveyService,
    ) {}

    @Query(returns => Survey)
    async findOne(@Args('id') id: string): Promise<Survey> {
        // ID指定でサーベイ情報を取得する
        return await this.surveyService.findOne(id);
    }

    @Mutation(returns => SurveyResult)
    async save(@Args('survey') surveyInput: SurveyInput): Promise<SurveyResult> {
        const ret: SurveyResult = {result: undefined, message: undefined, survey: undefined};

        try {
            // サーベイのデータを設定する
            const survey: Survey = new Survey(surveyInput);

            // サーベイを保存する
            const saveSurvey: Survey = await this.surveyService.save(survey);
            ret.result = 'OK';
            ret.message = undefined;
            ret.survey = saveSurvey;
        } catch (error) {
            ret.result = 'ERROR';
            ret.message = error.message;
            ret.survey = undefined;
        }

        return ret;
    }
}
