// 发送网络请求
import bwRequest from "..";
// bwRequest.post()

bwRequest.request({
  url: '/home/multidata',
}).then(res => {
  console.log(res.data);
})