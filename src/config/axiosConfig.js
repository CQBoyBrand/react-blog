/**
 * Created By brand On 2018/1/17
 */
import axios from 'axios'

//拦截请求
axios.interceptors.request.use(function(config){
    //TODO
    //例如这里可以写页面请求的加载动画

    return config
})

//拦截响应
axios.interceptors.response.use(function(config){
    //TODO
    //这里可以写关闭页面请求的加载动画

    return config
})