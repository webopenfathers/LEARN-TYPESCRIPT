// export function formatPrice() {}

// export function formatDate() {}

// 命名空间(了解) ===> 推荐esModule
export namespace price {
  export function format(price: string) {
    return '￥' + price;
  }

  export const name = 'price';
}

export namespace date {
  export function format(dateStr) {
    return '2022-10-10';
  }

  export const name = 'zbw';
}
