import type { AxiosRequestConfig, AxiosResponse } from 'axios'


// 针对于AxiosRequestConfig配置进行扩展
interface BWInterceptor<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}
export interface BWRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: BWInterceptor<T>
}