import 'reflect-metadata';
import { Field, InputType } from 'type-graphql';
import { ISurveyInput } from '../interfaces/isurvey-input.interface';

@InputType()
export class SurveyInput implements ISurveyInput {
    // 社員はやる気に満ちており、元気に働いている
    @Field()
    motivation: string;
    @Field()
    motivationKey: string;

    // 机の上、机の周りはきれいに整頓されている
    @Field()
    cleanDesk: string;
    @Field()
    cleanDeskKey: string;

    // 社内の業務はマニュアル化しており、必要な社員で共有できている
    @Field()
    manual: string;
    @Field()
    manualKey: string;

    // 業務にかかっている時間を把握し、改善に活かしている
    @Field()
    timeManagement: string;
    @Field()
    timeManagementKey: string;

    // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
    @Field()
    telework: string;
    @Field()
    teleworkKey: string;

    // 社員同士の連絡は、主に「○○○」で行うことが多い
    @Field()
    communication: string;
    @Field()
    communicationKey: string ;

    // 社内の情報は、主に「○○○」で共有している
    @Field()
    informationSharing: string;
    @Field()
    informationSharingKey: string;

    // 社内手続は、主に「○○○」で行っている
    @Field()
    workflow: string;
    @Field()
    workflowKey: string;

    // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
    @Field()
    customerManagement: string;
    @Field()
    customerManagementKey: string;

    // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
    @Field()
    profitManagement: string;
    @Field()
    profitManagementKey: string;
}
