export interface IAppState {
    currentPage: string;
    questionAnswers: Record<string, string>;
    lang: any; // Todo: type properly
    pageData: any; // Todo: type properly
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
