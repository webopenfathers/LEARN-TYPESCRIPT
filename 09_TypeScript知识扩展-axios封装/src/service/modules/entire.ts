import { bwRequest2 } from "..";

bwRequest2.request({
  url: '/entire/list',
  params: {
    offset: 0,
    size: 20
  }
}).then(res => {
  console.log(res);
})