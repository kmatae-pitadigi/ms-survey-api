import { ObjectID } from 'typeorm';
import { ISurveyInput} from './isurvey-input.interface';

export interface ISurvey extends ISurveyInput {
    id: ObjectID;
}
