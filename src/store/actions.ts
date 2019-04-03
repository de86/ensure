import { IQuestionAnswer, IPage } from '../shared/types';

export const actionNames = {
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_QUESTION_ANSWER: 'SET_QUESTION_ANSWER',
    SET_LANG: 'SET_LANG',
    SET_PAGE_DATA: 'SET_PAGE_DATA'
};

interface IAction<T> {
    type: string
    payload: T
};


// change type of payload to whatever type we decide for page
export const setCurrentPage = (payload: IPage): IAction<IPage> => ({
    type: actionNames.SET_CURRENT_PAGE,
    payload
});


export const setQuestionAnswer = (payload: IQuestionAnswer): IAction<IQuestionAnswer> => ({
    type: actionNames.SET_QUESTION_ANSWER,
    payload
})


// Todo: Type properly
export const setLang = (payload: any) => ({
    type: actionNames.SET_LANG,
    payload
})


// Todo: Type properly
export const setPageData = (payload: any) => ({
    type: actionNames.SET_PAGE_DATA,
    payload
})