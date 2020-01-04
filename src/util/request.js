import axios from 'axios';

export const get = async (url, data = {}) => {
    let res = await axios.get(url, { data });
    return res.data;
};
export const post = async (url, data = {}) => {
    let res = await axios.post(url, { data });
    return res.data;
};
