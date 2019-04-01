import { actionNames } from './actions';
import { IAppState } from '../shared/types';

// decide page number or names. maybe create enum
const initialState: IAppState = {
    currentPage: 'terms',
    questionAnswers: {},
    lang: {},
    pageData: {}
}

export default function rootReducer (state: IAppState = initialState, action: any) {

    switch (action.type) {
        case actionNames.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case actionNames.SET_QUESTION_ANSWER:
            return {
                ...state,
                questionAnswers: {
                    ...state.questionAnswers,
                    [action.payload.id]: action.payload.answer
                }
            }

        case actionNames.SET_LANG:
            return {
                ...state,
                lang: action.payload
            }

        case actionNames.SET_PAGE_DATA:
            return {
                ...state,
                pageData: action.payload
            }

        default:
            return state       
    }
};
