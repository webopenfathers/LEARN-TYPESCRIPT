import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from 'axios'


class BWRequest {
  instance: AxiosInstance

  // request实例 => axios实例
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }


  // 封装网络请求的方法
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
  // post() { }
  // get() { }
}

export default BWRequest