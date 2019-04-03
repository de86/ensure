export interface IAppState {
    currentPage: IPage;
    questionAnswers: Record<string, string>;
    lang: any; // Todo: type properly
    pageData: Record<string, IPage>; // Todo: type properly
}

export interface IQuestionTranslations {
    text: string;
    hint: string;
}

export interface IQuestion {
    id: number;
    name: string;
    translations: IQuestionTranslations
}

export interface IQuestionAnswer {
    id: string,
    answer: string
}

export interface IPage {
    name: string,
    questionIds: number[],
    nextPageSlug: string,
    prevPageSlug: string
}