import axios, { AxiosPromise } from 'axios';
import { ILang } from '../shared/types';

// Move to config
const API_ROOT = 'http://localhost:8080/api';

const GET_LANG_ROUTE = '/translations';


function getLang (locale: string) {
    return axios.get(`${API_ROOT}${GET_LANG_ROUTE}`, {
        params: {
            locale
        }
    })
        .then((res) => res.data[0]);
}

export default {
    getLang
}
