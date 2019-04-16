import { QuestionTypes } from "../enums";

export interface IAppState {
    currentPage: IPage;
    questions: IQuestions;
    lang: ILang;
    pageData: Record<string, IPage>;
}


export interface ILang {
    locale: string; // Maybe make this an enum for available languages
    translations: Record<string, ITranslations>;
}


type ITranslations = Record<string, string>


export interface IQuestionTranslations {
    text: string;
    hint: string;
}


export interface IQuestion {
    id: number;
    type: QuestionTypes;
    name: string;
    translations: IQuestionTranslations;
    answer?: string;
}


export type IQuestions = Record<number, IQuestion>


export interface IPage {
    name: string;
    questionIds: number[];
    nextPageSlug: string;
    prevPageSlug: string;
}


export interface IQuestionProps {
    question: IQuestion;
    inputRef: React.RefObject<HTMLInputElement>;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
