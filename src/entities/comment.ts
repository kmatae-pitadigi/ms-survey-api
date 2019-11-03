import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { IComment } from '../interfaces/icomment.interface';

@Entity()
@ObjectType()
export class Comment implements IComment {
    /**
     * ID
     */
    @ObjectIdColumn()
    @Field(type => ID)
    id: ObjectID;

    /**
     * 質問
     */
    @Field()
    @Column()
    question: string;

    /**
     * 回答
     */
    @Field()
    @Column()
    answer: string;

    /**
     * コメント
     */
    @Field()
    @Column()
    comment: string;
}
