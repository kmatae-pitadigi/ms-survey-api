import { ICommentResult } from '../interfaces/icomment-result.interface';
import { IComment } from '../interfaces/icomment.interface';

export class CommentResult implements ICommentResult {
    result: string;
    message?: string;
    comment?: IComment;
}
