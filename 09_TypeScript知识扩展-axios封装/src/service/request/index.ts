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
      return res
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
  request(config: BWRequestConfig) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors?.requestSuccessFn(config)
    }
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        // 单词次响应的拦截器
        if (config.interceptors?.responseSuccessFn) {
          res = config.interceptors.responseSuccessFn(res)
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  // post() { }
  // get() { }
}

export default BWRequest