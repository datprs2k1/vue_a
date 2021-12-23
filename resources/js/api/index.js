import axios from "axios";

const api_url = 'http://api.dev/api';

const getHeaders = () => {
    let token = localStorage.getItem('token');
    return {
        'Authorization': `Bearer ${token}`
    }
};

const get = (url) => {
    return axios.get(`${api_url}${url}`, { headers: getHeaders() });
}

const post = (url, data) => {
    return axios.post(`${api_url}${url}`, data, { headers: getHeaders() });
}

const put = (url, data) => {
    return axios.put(`${api_url}${url}`, data, { headers: getHeaders() });
}

const del = (url) => {
    return axios.delete(`${api_url}${url}`, { headers: getHeaders() });
}

export default {
    get,
    post,
    put,
    del
}
