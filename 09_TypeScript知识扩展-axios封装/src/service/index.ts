import { BASE_URL, TIME_OUT } from "./config";
import BWRequest from "./request";
const bwRequest = new BWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})


export const bwRequest2 = new BWRequest({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 1000,
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('爱彼迎请求成功的拦截');
      return config
    },
    requestFailureFn: (err) => {
      console.log('爱彼迎请求失败的拦截');
      return err
    },
    responseSuccessFn: (res) => {
      console.log('爱彼迎响应成功的拦截');
      return res
    },
    responseFailureFn: (err) => {
      console.log('爱彼迎响应失败的拦截');
      return err
    }
  }
})





export default bwRequest