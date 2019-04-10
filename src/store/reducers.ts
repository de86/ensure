import { actionNames } from './actions';
import { IAppState, IPage, ILang, IQuestions } from '../shared/types';

// decide page number or names. maybe create enum
const initialState: IAppState = {
    currentPage: {} as IPage,
    questions: {} as IQuestions,
    lang: {} as ILang,
    pageData: {}
}

export default function rootReducer (state: IAppState = initialState, action: any) {

    switch (action.type) {
        case actionNames.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case actionNames.GET_ALL_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }

        case actionNames.SET_QUESTION_ANSWER:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    [action.payload.id]: {
                        ...state.questions[action.payload.id],
                        answer: action.payload.answer
                    }
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
