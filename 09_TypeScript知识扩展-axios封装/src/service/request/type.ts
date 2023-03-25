import type { AxiosRequestConfig, AxiosResponse } from 'axios'


// 针对于AxiosRequestConfig配置进行扩展
interface BWInterceptor {
  requestSuccessFn?: (config: AxiosRequestConfig) => any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: AxiosResponse) => AxiosResponse
  responseFailureFn?: (err: any) => any
}
export interface BWRequestConfig extends AxiosRequestConfig {
  interceptors?: BWInterceptor
}