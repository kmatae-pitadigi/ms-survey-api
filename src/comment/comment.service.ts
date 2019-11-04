import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from '../entities/comment';
import { ISurvey } from '../interfaces/isurvey.interface';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
    ) {}

    /**
     * サーベイに合わせてコメントを設定する
     * @param survey サーベイ情報
     */
    async findBySurvey(survey: ISurvey): Promise<ISurvey> {
        let comment: Comment;

        // 社員はやる気に満ちており、元気に働いている
        comment = await this.findOne(survey.motivationKey, survey.motivation);
        survey.motivationComment = comment.comment;
        // 机の上、机の周りはきれいに整頓されている
        comment = await this.findOne(survey.cleanDeskKey, survey.cleanDesk);
        survey.cleanDeskComment = comment.comment;
        // 社内の業務はマニュアル化しており、必要な社員で共有できている
        comment = await this.findOne(survey.manualKey, survey.manual);
        survey.manualComment = comment.comment;
        // 業務にかかっている時間を把握し、改善に活かしている
        comment = await this.findOne(survey.timeManagementKey, survey.timeManagement);
        survey.timeManagementComment = comment.comment;
        // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
        comment = await this.findOne(survey.teleworkKey, survey.telework);
        survey.teleworkComment = comment.comment;
        // 社員同士の連絡は、主に「○○○」で行うことが多い
        comment = await this.findOne(survey.communicationKey, survey.communication);
        survey.communicationComment = comment.comment;
        // 社内の情報は、主に「○○○」で共有している
        comment = await this.findOne(survey.informationSharingKey, survey.informationSharing);
        survey.informationSharingComment = comment.comment;
        // 社内手続は、主に「○○○」で行っている
        comment = await this.findOne(survey.workflowKey, survey.workflow);
        survey.workflowComment = comment.comment;
        // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
        comment = await this.findOne(survey.customerManagementKey, survey.customerManagement);
        survey.customerManagementComment = comment.comment;
        // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
        comment = await this.findOne(survey.profitManagementKey, survey.profitManagement);
        survey.profitManagementComment = comment.comment;

        return survey;
    }

    /**
     * サーベイの質問と回答からコメントを取得する
     */
    async findOne(questionParam: string, answerParam: string): Promise<Comment> {
        // 質問と回答からコメントを取得する
        let comment;
        try {
            comment = await this.commentRepository.findOne({
                where: {
                    question: questionParam,
                    answer: answerParam,
                },
            });
        } catch (error) {
            Promise.reject(error);
        }

        return comment;
    }
}
