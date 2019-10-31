import { IResult } from './iresult.interface';
import { ISurvey } from './isurvey.interface';

export interface ISurveyResult extends IResult {
    survey?: ISurvey;
}
