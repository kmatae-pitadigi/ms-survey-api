import { ObjectID } from 'typeorm';

export interface IComment {
    id: ObjectID;

    /**
     * 質問
     */
    question: string;

    /**
     * 回答
     */
    answer: string;

    /**
     * コメント
     */
    comment: string;
}
