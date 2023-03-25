// 发送网络请求
import bwRequest from "..";
// bwRequest.post()
interface IHomeData {
  data: any,
  returnCode: string,
  success: boolean
}

// 只有全局拦截
bwRequest.request<IHomeData>({
  url: '/home/multidata',
}).then((res) => {
  console.log(res.data, res.returnCode, res.success);
})