export interface ISurveyInput {
    // 社員はやる気に満ちており、元気に働いている
    motivation: string;
    // 机の上、机の周りはきれいに整頓されている
    cleanDesk: string;
    // 社内の業務はマニュアル化しており、必要な社員で共有できている
    manual: string;
    // 業務にかかっている時間を把握し、改善に活かしている
    timeManagement: string;
    // テレワーク、在宅ワークができる環境を整備し、実際に利用している社員がいる
    telework: string;
    // 社員同士の連絡は、主に「○○○」で行うことが多い
    communication: string;
    // 社内の情報は、主に「○○○」で共有している
    informationSharing: string;
    // 社内手続は、主に「○○○」で行っている
    workflow: string;
    // 顧客情報は、顧客の属性、顧客に付随する情報(案件、問合せなど)を含め一元管理できている
    customerManagement: string;
    // 売上、経費、利益の状況は最新をすぐに確認できるようになっている
    profitManagement: string;
}
