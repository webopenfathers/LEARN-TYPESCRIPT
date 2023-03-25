import axios, { AxiosResponse } from "axios"
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { BWRequestConfig } from './type'


// 拦截器：蒙版Loading/token/修改配置

/**
 * 两个难点：
 * 1.拦截器进行精细控制
 * >全局拦截器
 * >实例拦截器
 * >单词请求拦截器
 *
 * 2.响应结果的类型处理(泛型)
 */


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
  request<T = any>(config: BWRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors?.requestSuccessFn(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance.request<any, T>(config).then(res => {
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

  get<T = any>(config: BWRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: BWRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: BWRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  put<T = any>(config: BWRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}

export default BWRequest