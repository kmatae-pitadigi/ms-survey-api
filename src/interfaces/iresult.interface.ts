export interface IResult {
    /**
     * 結果
     * OK : 成功
     * ERROR : エラー
     */
    result: string;
    /**
     * エラー時のメッセージ
     */
    message?: string;
}
