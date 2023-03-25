import { bwRequest2 } from "..";


// 请求有拦截器
// 全局拦截和局部拦截
bwRequest2.request({
  url: '/entire/list',
  params: {
    offset: 0,
    size: 20
  }
}).then(res => {
  console.log(res);
})



interface IHighScoreData {
  list: any[],
  subtitle: string,
  title: string,
  type: string,
  _id: string
}

// 请求无拦截器
// 全局拦截和局部拦截以及单次请求拦截
bwRequest2.request<IHighScoreData>({
  url: '/home/highscore',
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('/home/hightscore请求成功的拦截');
      return config
    },
    responseSuccessFn: (res) => {
      console.log('/home/hightscore响应成功的拦截');
      return res
    }
  }
}).then(res => {
  console.log(res.list, res.subtitle, res.title);
})