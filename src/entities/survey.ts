import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';
import { Field, ID, ObjectType, Float } from 'type-graphql';
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
    @Column()
    @Field()
    motivationComment: string;
    @Column()
    @Field(type => Float)
    motivationRate: number;

    // 机の上、机の周りはきれいに整頓されている
    @Column()
    @Field()
    cleanDesk: string;
    @Column()
    @Field()
    cleanDeskComment: string;
    @Column()
    @Field(type => Float)
    cleanDeskRate: number;

    // 社内の業務はマニュアル化しており、必要な社員で共有できている
    @Column()
    @Field()
    manual: string;
    @Column()
    @Field()
    manualComment: string;
    @Column()
    @Field(type => Float)
    manualRate: number;

    // 業務にかかっている時間を把握し、改善に活かしている
    @Column()
    @Field()
    timeManagement: string;
    @Column()
    @Field()
    timeManagementComment: string;
    @Column()
    @Field(type => Float)
    timeManagementRate: number;

    // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
    @Column()
    @Field()
    telework: string;
    @Column()
    @Field()
    teleworkComment: string;
    @Column()
    @Field(type => Float)
    teleworkRate: number;

    // 社員同士の連絡は、主に「○○○」で行うことが多い
    @Column()
    @Field()
    communication: string;
    @Column()
    @Field()
    communicationComment: string;
    @Column()
    @Field(type => Float)
    communicationRate: number;

    // 社内の情報は、主に「○○○」で共有している
    @Column()
    @Field()
    informationSharing: string;
    @Column()
    @Field()
    informationSharingComment: string;
    @Column()
    @Field(type => Float)
    informationSharingRate: number;

    // 社内手続は、主に「○○○」で行っている
    @Column()
    @Field()
    workflow: string;
    @Column()
    @Field()
    workflowComment: string;
    @Column()
    @Field(type => Float)
    workflowRate: number;

    // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
    @Column()
    @Field()
    customerManagement: string;
    @Column()
    @Field()
    customerManagementComment: string;
    @Column()
    @Field(type => Float)
    customerManagementRate: number;

    // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
    @Column()
    @Field()
    profitManagement: string;
    @Column()
    @Field()
    profitManagementComment: string;
    @Column()
    @Field(type => Float)
    profitManagementRate: number;

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
