import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from '../entities/survey';

@Injectable()
export class SurveyService {
    constructor(
        @InjectRepository(Survey)
        private readonly surveyRepository: Repository<Survey>,
    ) {}

    /**
     * ID指定でサーベイ情報を取得する
     * @param id サーベイID
     */
    async findOne(id: string): Promise<Survey> {
        // ID指定でサーベイ情報を取得する
        return await this.surveyRepository.findOne(id);
    }

    /**
     * サーベイを保存する
     */
    async save(survey: Survey): Promise<Survey> {
        // サーベイを保存する
        return await this.surveyRepository.save(survey);
    }
}
