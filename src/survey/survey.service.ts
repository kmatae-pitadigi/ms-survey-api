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
        const survey = await this.surveyRepository.findOne(id);

        // コメント情報を設定する
        return this.commentService.findBySurvey(survey);
    }

    /**
     * サーベイを保存する
     */
    async save(survey: Survey): Promise<Survey> {
        // サーベイを保存する
        const saveSurvey: Survey = await this.surveyRepository.save(survey);

        // コメント情報を設定する
        return this.commentService.findBySurvey(saveSurvey);
    }
}
