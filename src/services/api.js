import axios from 'axios';

import apiConstants from '../constants/api';

export default class Api {
    static request(options) {
        return axios.create({
            baseURL: apiConstants.url,
            ...options
        });
    }
}
