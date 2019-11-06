import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from '../entities/survey';
import { CommentService } from '../comment/comment.service';

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey)
        private readonly surveyRepository: Repository<Survey>,
        private readonly commentService: CommentService,
    ) {}

    /**
     * ID指定でサーベイ情報を取得する
     * @param id サーベイID
     */
    async findOne(id: string): Promise<Survey> {
        // ID指定でサーベイ情報を取得する
        let survey = await this.surveyRepository.findOne(id);

        // 回答率を取得する
        survey = await this.getRate(survey);

        // コメント情報を設定する
        return this.commentService.findBySurvey(survey);
    }

    /**
     * サーベイを保存する
     */
    async save(survey: Survey): Promise<Survey> {
        // サーベイを保存する
        let saveSurvey: Survey = await this.surveyRepository.save(survey);

        // 回答率を取得する
        saveSurvey = await this.getRate(saveSurvey);

        // コメント情報を設定する
        return this.commentService.findBySurvey(saveSurvey);
    }

    /**
     * 回答率を取得する
     * @param survey サーベイ情報
     */
    private async getRate(survey: Survey): Promise<Survey> {
        // 全回答件数を取得する
        const total: number = await this.surveyRepository.count();

        let cnt: number;
        // 社員はやる気に満ちており、元気に働いている
        cnt = await this.surveyRepository.count({motivation: survey.motivation});
        survey.motivationRate = cnt / total * 100;
        // 机の上、机の周りはきれいに整頓されている
        cnt = await this.surveyRepository.count({cleanDesk: survey.cleanDesk});
        survey.cleanDeskRate = cnt / total * 100;
        // 社内の業務はマニュアル化しており、必要な社員で共有できている
        cnt = await this.surveyRepository.count({manual: survey.manual});
        survey.manualRate = cnt / total * 100;
        // 業務にかかっている時間を把握し、改善に活かしている
        cnt = await this.surveyRepository.count({timeManagement: survey.timeManagement});
        survey.timeManagementRate = cnt / total * 100;
        // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
        cnt = await this.surveyRepository.count({telework: survey.telework});
        survey.teleworkRate = cnt / total * 100;
        // 社員同士の連絡は、主に「○○○」で行うことが多い
        cnt = await this.surveyRepository.count({communication: survey.communication});
        survey.communicationRate = cnt / total * 100;
        // 社内の情報は、主に「○○○」で共有している
        cnt = await this.surveyRepository.count({informationSharing: survey.informationSharing});
        survey.informationSharingRate = cnt / total * 100;
        // 社内手続は、主に「○○○」で行っている
        cnt = await this.surveyRepository.count({workflow: survey.workflow});
        survey.workflowRate = cnt / total * 100;
        // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
        cnt = await this.surveyRepository.count({customerManagement: survey.customerManagement});
        survey.customerManagementRate = cnt / total * 100;
        // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
        cnt = await this.surveyRepository.count({profitManagement: survey.profitManagement});
        survey.profitManagementRate = cnt / total * 100;

        return survey;
    }
}
