import {SET_CURRENT_PAGE} from './actions';

// Move out of here
export interface IAppState {
    currentPage: string
}

// decide page number or names. maybe create enum
const initialState: IAppState = {
    currentPage: 'terms'
}

export default function rootReducer (state: IAppState = initialState, action: any) {

    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        default:
            return state       
    }
};
