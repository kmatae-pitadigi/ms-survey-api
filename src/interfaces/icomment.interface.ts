import { ObjectID } from 'typeorm';
import { ICommentInput } from './icomment-input.interface';

export interface IComment extends ICommentInput {
    id: ObjectID;
    comment: string;
}
