import { IResult } from './iresult.interface';
import { IComment } from './icomment.interface';

export interface ICommentResult extends IResult {
    comment?: IComment;
}
