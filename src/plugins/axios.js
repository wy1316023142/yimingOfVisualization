import axios from 'axios';
import app from '@/main.js'
import {Loading, Message} from 'element-ui';
const request = axios.create({
    baseURL: commonURL,
    timeout: 600000, // 请求超时时间

})

let loadingInstance = null;
let needLoadingRequestCount = 0

function showFullScreenLoading() {
    if(needLoadingRequestCount === 0) {
        // alert("正在加载中.....")
        loadingInstance = Loading.service({
            fullscreen: true,
            // lock: true,
            //     text: 'Loading',
            //     spinner: 'el-icon-loading',
            //     background: 'rgba(0, 0, 0, 0.7)'
        });
    }
    needLoadingRequestCount++
}

function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        loadingInstance.close()
    }
}




request.interceptors.request.use(
    config => {
        // let token = sessionStorage.getItem('token');
        // if (token && !config.noToken) {
        //     config.headers["Authorization"] = "Bearer" + " " + token
        // }
        showFullScreenLoading();
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//http response 拦截器
request.interceptors.response.use(
    response => {
        setTimeout(_ => {
            tryHideFullScreenLoading();
        }, 500)
        return response;
    },
    error => {
        if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
          Message.error('请求超时，请稍后再试');
        };
        
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message =error.response.data.error_description;
                    break;
                case 401:
                    error.message = '未授权，请重新登录';
                    // app.$router.push('/login');
                    //判断当前的路由是否是目标路由
                    // if(app.$router.currentRoute.name == "target"){
                    //     //跳转回login路由，并把目标路由的url路径保存在login的query中
                    //     app.$router.replace({
                    //         name:"登录",
                    //         query: {redirect: app.$router.currentRoute.fullPath}
                    //     })
                    // }else{
                    //     /* 普通401拦截直接返回到登录页面 */
                        
                    // }
                    break;
                case 403:
                    error.message = '拒绝访问'
                    break;
                case 404:
                    error.message = '请求错误,未找到该资源'
                    break;
                case 405:
                    error.message = '请求方法未允许'
                    break;
                case 408:
                    error.message = '请求超时'
                    break;
                case 500:
                    error.message = '服务器端出错'
                    break;
                case 501:
                    error.message = '网络未实现'
                    break;
                case 502:
                    error.message = '网络错误'
                    break;
                case 503:
                    error.message = '服务不可用'
                    break;
                case 504:
                    error.message = '网络超时'
                    break;
                case 505:
                    error.message = 'http版本不支持该请求'
                    break;
                default:
                    error.message = `连接错误${error.response.status}`
            }
        } else {
            switch (error.message) {
                case 'Network Error':
                    error.message = '服务器连接失败'
                    break;
                case 'timeout of 60000ms exceeded':
                    error.message = '网络超时,请重试！'
                    break;
                default:
                    error.message = '其他错误'
            }
        }
        Message.error(error.message);

        tryHideFullScreenLoading();
        return Promise.reject(error)
    }
)
/**
 * @params state:是否将接口错误信息进行提示
 */

export function ajax({
    baseURL,
    url,
    method,
    data,
    params,
    showMessage,
    noToken = false,
    headerType,
    transformRequest,
    isLogin=false
    
}) {
    let requestParams = {
        baseURL: baseURL || commonURL,
        params: params,
        data: data,
        method: method || 'get',
        noToken: noToken,
        responseType: 'application/json',
        transformRequest:transformRequest||null,
    }
    if (headerType) requestParams.headers = headerType;
    
    return new Promise((resolve, reject) => {

        request(url, requestParams).then((response) => {
            //token接口返回数据处理
            if(isLogin){
                resolve(response.data);
            }else if (response.data.code == 1) {
                resolve(response.data);
                if (showMessage) {
                    Message.success(showMessage);
                }
            } else {
                Message.error(response.data.message);
            }

        }).catch((err) => {
            reject(err)
        })
    })
};