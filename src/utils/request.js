import axios from 'axios';
import qs from 'qs'


/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        // 设置请求头
        config.headers = {
           ...config.headers,
        };
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        if (response.data.errCode === 2) {
            console.log("过期");
        }
        return response.data;
    },
    (error) => {
        return Promise.reject(error.response)
    }
);

const HEADERS = {}
// 文本格式
const Content_Type = {
    'json': 'application/json;charset=utf-8',
    'formdata': 'application/x-www-form-urlencoded;charset=utf-8'
}

export const request = ({
    baseURL = '',
    url = '',
    params = {},
    method = 'get',
    headers = HEADERS,
    data = {},
    timeout = 1000 * 20,
    contentType = "json"
} = {}) => {
    data = contentType === 'formdata' ? qs.stringify(data) : data
    headers['Content-Type'] = Content_Type[contentType]
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            baseURL: baseURL,
            method: method,
            headers: headers,
            params: params,
            data: data,
            timeout: timeout,
        }).then((res) => {
            resolve(res);
        }, (err) => {
            reject(err)
        })
    })
}