import { IPage, IQuestion, ILang } from '../shared/types';
import { QuestionIds } from '../../data/questionSets/car';
import { Dispatch } from 'redux';

import api from '../services/api';

export const actionNames = {
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_QUESTION_ANSWER: 'SET_QUESTION_ANSWER',
    SET_LANG: 'SET_LANG',
    SET_PAGE_DATA: 'SET_PAGE_DATA',
    GET_ALL_QUESTIONS: 'GET_ALL_QUESTIONS'
};

interface IAction<T> {
    type: string
    payload: T
};


export const setCurrentPage = (payload: IPage): IAction<IPage> => ({
    type: actionNames.SET_CURRENT_PAGE,
    payload
});


export const getAllQuestions = (payload: Record<QuestionIds, IQuestion>): IAction<Record<QuestionIds, IQuestion>> => ({
    type: actionNames.GET_ALL_QUESTIONS,
    payload
});


export const setQuestionAnswer = (payload: string): IAction<string> => ({
    type: actionNames.SET_QUESTION_ANSWER,
    payload
})



const setLangAction = (payload: ILang): IAction<ILang> => ({
    type: actionNames.SET_LANG,
    payload
})

export function setLang (locale: string) {
    return (dispatch: Dispatch) => 
        api.getLang(locale)
            .then(
                (lang) => dispatch(setLangAction(lang)),
                error => console.log(error)
            )
}


// Todo: Type properly
export const setPageData = (payload: any) => ({
    type: actionNames.SET_PAGE_DATA,
    payload
})
