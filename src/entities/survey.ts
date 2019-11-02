import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
import { ISurvey } from '../interfaces/isurvey.interface';
import { ISurveyInput } from '../interfaces/isurvey-input.interface';

@Entity()
@ObjectType()
export class Survey implements ISurvey {
    @ObjectIdColumn()
    @Field(type => ID)
    id: ObjectID;
    // 社員はやる気に満ちており、元気に働いている
    @Column()
    @Field()
    motivation: string;
    // 机の上、机の周りはきれいに整頓されている
    @Column()
    @Field()
    cleanDesk: string;
    // 社内の業務はマニュアル化しており、必要な社員で共有できている
    @Column()
    @Field()
    manual: string;
    // 業務にかかっている時間を把握し、改善に活かしている
    @Column()
    @Field()
    timeManagement: string;
    // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
    @Column()
    @Field()
    telework: string;
    // 社員同士の連絡は、主に「○○○」で行うことが多い
    @Column()
    @Field()
    communication: string;
    // 社内の情報は、主に「○○○」で共有している
    @Column()
    @Field()
    informationSharing: string;
    // 社内手続は、主に「○○○」で行っている
    @Column()
    @Field()
    workflow: string;
    // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
    @Column()
    @Field()
    customerManagement: string;
    // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
    @Column()
    @Field()
    profitManagement: string;

    constructor(surveyInput: ISurveyInput) {
        if (surveyInput) {
            this.motivation = surveyInput.motivation;
            this.cleanDesk = surveyInput.cleanDesk;
            this.manual = surveyInput.manual;
            this.timeManagement = surveyInput.timeManagement;
            this.telework = surveyInput.telework;
            this.communication = surveyInput.communication;
            this.informationSharing = surveyInput.informationSharing;
            this.workflow = surveyInput.workflow;
            this.customerManagement = surveyInput.customerManagement;
            this.profitManagement = surveyInput.profitManagement;
        }
    }
}
