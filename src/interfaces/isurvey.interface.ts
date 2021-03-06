import { ObjectID } from 'typeorm';
import { ISurveyInput} from './isurvey-input.interface';

export interface ISurvey extends ISurveyInput {
    id: ObjectID;
    // 社員はやる気に満ちており、元気に働いている
    motivationComment: string;
    motivationRate: number;

    // 机の上、机の周りはきれいに整頓されている
    cleanDeskComment: string;
    cleanDeskRate: number;

    // 社内の業務はマニュアル化しており、必要な社員で共有できている
    manualComment: string;
    manualRate: number;

    // 業務にかかっている時間を把握し、改善に活かしている
    timeManagementComment: string;
    timeManagementRate: number;

    // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
    teleworkComment: string;
    teleworkRate: number;

    // 社員同士の連絡は、主に「○○○」で行うことが多い
    communicationComment: string;
    communicationRate: number;

    // 社内の情報は、主に「○○○」で共有している
    informationSharingComment: string;
    informationSharingRate: number;

    // 社内手続は、主に「○○○」で行っている
    workflowComment: string;
    workflowRate: number;

    // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
    customerManagementComment: string;
    customerManagementRate: number;

    // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
    profitManagementComment: string;
    profitManagementRate: number;
}
