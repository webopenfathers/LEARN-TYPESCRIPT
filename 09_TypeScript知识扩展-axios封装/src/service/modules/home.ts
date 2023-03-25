// 发送网络请求
import bwRequest from "..";
// bwRequest.post()


// 只有全局拦截
bwRequest.request({
  url: '/home/multidata',
}).then((res) => {
  console.log(res);
})