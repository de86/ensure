import { SET_CURRENT_PAGE, SET_QUESTION_ANSWER } from './actions';
import { IAppState } from '../shared/types';

// decide page number or names. maybe create enum
const initialState: IAppState = {
    currentPage: 'terms',
    questionAnswers: {}
}

export default function rootReducer (state: IAppState = initialState, action: any) {

    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case SET_QUESTION_ANSWER:
            return {
                ...state,
                questionAnswers: {
                    ...state.questionAnswers,
                    [action.payload.id]: action.payload.answer
                }
            }

        default:
            return state       
    }
};
