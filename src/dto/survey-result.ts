import 'reflect-metadata';
import { Field, ObjectType } from 'type-graphql';
import { ISurveyResult } from '../interfaces/isurvey-result.interface';
import { Survey } from '../entities/survey';

@ObjectType()
export class SurveyResult implements ISurveyResult {
    @Field()
    result: string;

    @Field({nullable: true})
    message?: string;

    @Field({nullable: true})
    survey?: Survey;
}
