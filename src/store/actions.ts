import { IQuestionAnswer } from '../shared/types';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_QUESTION_ANSWER = 'SET_QUESTION_ANSWER';
export const GET_LANG = 'GET_LANG';


interface IAction<T> {
    type: string
    payload: T
}


// change type of payload to whatever type we decide for page
export const setCurrentPage = (payload: string): IAction<string> => ({
    type: SET_CURRENT_PAGE,
    payload
});


export const setQuestionAnswer = (payload: IQuestionAnswer): IAction<IQuestionAnswer> => ({
    type: SET_QUESTION_ANSWER,
    payload
})


export const getLang = (payload: string) => ({
    type: GET_LANG,
    payload
})