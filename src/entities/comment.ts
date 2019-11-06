import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';
import { IComment } from '../interfaces/icomment.interface';

@Entity()
export class Comment implements IComment {
    /**
     * ID
     */
    @ObjectIdColumn()
    id: ObjectID;

    /**
     * 質問
     */
    @Column()
    question: string;

    /**
     * 回答
     */
    @Column()
    answer: string;

    /**
     * コメント
     */
    @Column()
    comment: string;
}
