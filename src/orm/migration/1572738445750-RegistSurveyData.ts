import { MigrationInterface, QueryRunner, getConnection, getMongoRepository } from 'typeorm';
import { Comment } from '../../entities/comment';
import * as fs from 'fs';
import * as path from 'path';

export class RegistSurveyData1572738445750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        // comment.jsonを読み込む
        const commentDefFs = fs.readFileSync(path.join(__dirname, 'data/comment-def.json'));
        const commentDefJson = JSON.parse(commentDefFs.toString());

        // comment.jsonの定義に合わせてコメント情報を作成する
        const commentList: Comment[] = [];
        for (const item of commentDefJson) {
            const comment: Comment = new Comment();
            comment.question = item.question;
            comment.answer = item.answer;
            const commentFs = fs.readFileSync(path.join(__dirname, 'data', item.commentFile));
            comment.comment = commentFs.toString();

            commentList.push(comment);
        }

        // データベースに保存する
        const commentRepository = getMongoRepository(Comment);
        await commentRepository.insertMany(commentList);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        // コメント情報を削除する
        const commentRepository = getMongoRepository(Comment);
        await commentRepository.deleteMany({});
    }

}
