// 元组：useState函数
function useState<T>(initialState: T): [T, (newVal: T) => void] {
  let state = initialState;
  function setState(newVal: T) {
    state = newVal;
  }

  return [state, setState];
}

// 初始化count
const [count, setState] = useState(100);
const [message, setMessage] = useState('Hello World');
const [banners, setBanners] = useState<any[]>([]);

export {};
