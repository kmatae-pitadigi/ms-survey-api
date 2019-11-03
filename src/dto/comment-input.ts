import { ICommentInput } from '../interfaces/icomment-input.interface';

export class CommentInput implements ICommentInput {
    question: string;
    answer: string;
}
