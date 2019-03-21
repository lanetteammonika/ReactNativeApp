import axios from 'axios';

const accessToken = "";

const apiBaseUrl = {
    local: '',
    development:'',
    production:''
}

export const getRequest = (endpoint, payload = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        headers.Authorization = accessToken;
        axios.get(apiBaseUrl.development + endpoint,
            {headers: headers})
            .then((response) => {
                console.log('will return response..');
                resolve(response);
            })
            .catch((error) => {
                console.log('will return error..');
                reject(error);
            });
    });
};

export const postRequest = (endpoint, payload = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        headers.Authorization = accessToken;
        axios.post(apiBaseUrl.development + endpoint,
            {headers: headers,
                data: payload,})
            .then((response) => {
                console.log('will return response..');
                resolve(response);
            })
            .catch((error) => {
                console.log('will return error..');
                reject(error);
            });
    });
};

export const putRequest = (endpoint, payload = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        headers.Authorization = accessToken;
        axios.put(apiBaseUrl.development + endpoint,
            {headers: headers,
                data: payload,})
            .then((response) => {
                console.log('will return response..');
                resolve(response);
            })
            .catch((error) => {
                console.log('will return error..');
                reject(error);
            });
    });
};

export const deleteRequest = (endpoint, payload = {}, headers = {}) => {
    return new Promise((resolve, reject) => {
        headers.Authorization = accessToken;
        axios.delete(apiBaseUrl.development + endpoint,
            {headers: headers,
                data: payload,})
            .then((response) => {
                console.log('will return response..');
                resolve(response);
            })
            .catch((error) => {
                console.log('will return error..');
                reject(error);
            });
    });
};