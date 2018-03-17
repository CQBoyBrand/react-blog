/**
 * Created By brand On 2018/3/12
 */
import axios from 'axios'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const _BASE_URL = "http://localhost:3100"

export function getData(url, params) {
    let _url = _BASE_URL + url
    return new Promise((resolve, reject) => {
        axios.get(_url, params).then(function (response) {
            resolve(response)
        })
            .catch(function (err) {
                reject(err)
            })
    })
}

export function postData(url, params) {
    let _url = _BASE_URL + url
    return new Promise((resolve, reject) => {
        axios.post(_url, params).then(function (response) {
            resolve(response)
        })
            .catch(function (err) {
                reject(err)
            })
    })
}


//拦截请求
axios.interceptors.request.use(function(config){
    //TODO
    //例如这里可以写页面请求的加载动画
    NProgress.start()
    return config
})

//拦截响应
axios.interceptors.response.use(function(config){
    //TODO
    //这里可以写关闭页面请求的加载动画
    NProgress.done()
    return config
})