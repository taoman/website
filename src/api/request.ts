/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2021-01-04 16:14:40
 * @LastEditors: taoman
 * @LastEditTime: 2021-01-04 16:36:33
 */
import axios from "axios";
const request = axios.create({
    baseURL: "https://www.fastmock.site/mock/054078e88a10e1fb66eee37767df11d8/api/front-end/",
    timeout: 1000
    // headers: {
    //   Accept: process.env.VUE_APP_BASE_HEADER
    // }
  });
// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default request