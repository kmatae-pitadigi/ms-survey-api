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
    @Column()
    @Field()
    motivationKey: string;
    @Column()
    @Field()
    motivationComment: string;

    // 机の上、机の周りはきれいに整頓されている
    @Column()
    @Field()
    cleanDesk: string;
    @Column()
    @Field()
    cleanDeskKey: string;
    @Column()
    @Field()
    cleanDeskComment: string;

    // 社内の業務はマニュアル化しており、必要な社員で共有できている
    @Column()
    @Field()
    manual: string;
    @Column()
    @Field()
    manualKey: string;
    @Column()
    @Field()
    manualComment: string;

    // 業務にかかっている時間を把握し、改善に活かしている
    @Column()
    @Field()
    timeManagement: string;
    @Column()
    @Field()
    timeManagementKey: string;
    @Column()
    @Field()
    timeManagementComment: string;

    // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
    @Column()
    @Field()
    telework: string;
    @Column()
    @Field()
    teleworkKey: string;
    @Column()
    @Field()
    teleworkComment: string;

    // 社員同士の連絡は、主に「○○○」で行うことが多い
    @Column()
    @Field()
    communication: string;
    @Column()
    @Field()
    communicationKey: string;
    @Column()
    @Field()
    communicationComment: string;

    // 社内の情報は、主に「○○○」で共有している
    @Column()
    @Field()
    informationSharing: string;
    @Column()
    @Field()
    informationSharingKey: string;
    @Column()
    @Field()
    informationSharingComment: string;

    // 社内手続は、主に「○○○」で行っている
    @Column()
    @Field()
    workflow: string;
    @Column()
    @Field()
    workflowKey: string;
    @Column()
    @Field()
    workflowComment: string;

    // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
    @Column()
    @Field()
    customerManagement: string;
    @Column()
    @Field()
    customerManagementKey: string;
    @Column()
    @Field()
    customerManagementComment: string;

    // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
    @Column()
    @Field()
    profitManagement: string;
    @Column()
    @Field()
    profitManagementKey: string;
    @Column()
    @Field()
    profitManagementComment: string;

    constructor(surveyInput: ISurveyInput) {
        if (surveyInput) {
            this.motivation = surveyInput.motivation;
            this.motivationKey = surveyInput.motivationKey;
            this.cleanDesk = surveyInput.cleanDesk;
            this.cleanDeskKey = surveyInput.cleanDeskKey;
            this.manual = surveyInput.manual;
            this.manualKey = surveyInput.manualKey;
            this.timeManagement = surveyInput.timeManagement;
            this.timeManagementKey = surveyInput.timeManagementKey;
            this.telework = surveyInput.telework;
            this.teleworkKey = surveyInput.teleworkKey;
            this.communication = surveyInput.communication;
            this.communicationKey = surveyInput.communicationKey;
            this.informationSharing = surveyInput.informationSharing;
            this.informationSharingKey = surveyInput.informationSharingKey;
            this.workflow = surveyInput.workflow;
            this.workflowKey = surveyInput.workflowKey;
            this.customerManagement = surveyInput.customerManagement;
            this.customerManagementKey = surveyInput.customerManagementKey;
            this.profitManagement = surveyInput.profitManagement;
            this.profitManagementKey = surveyInput.profitManagementKey;
        }
    }
}
