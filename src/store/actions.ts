export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

// Move to types file somewhere
interface IAction<T> {
    type: string
    payload: T
}


// change type of payload to whatever type we decide for page
export const setCurrentPage = (payload: string): IAction<string> => ({
    type: SET_CURRENT_PAGE,
    payload
});
