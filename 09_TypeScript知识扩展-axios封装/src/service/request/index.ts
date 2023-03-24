import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { BWRequestConfig } from './type'


// 拦截器：蒙版Loading/token/修改配置




class BWRequest {
  instance: AxiosInstance

  // request实例 => axios实例
  constructor(config: BWRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加请求拦截器
    this.instance.interceptors.request.use((config) => {
      // loading/token
      console.log('全局请求成功的拦截');
      return config
    }, err => {
      console.log('全局请求失败的拦截');
      return err
    })

    // 每个instance实例都添加响应拦截器
    this.instance.interceptors.response.use(res => {
      console.log('全局响应成功的拦截');
      return res.data
    }, err => {
      console.log('全局响应失败的拦截');
      return err
    })


    // 针对特定的接口添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn,
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )


  }


  // 封装网络请求的方法
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
  // post() { }
  // get() { }
}

export default BWRequest