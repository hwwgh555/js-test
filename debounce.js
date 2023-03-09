/* 末尾执行 */
// 定时器版
function debounce(fn, delay) {
  /*
    返回一个待执行函数
    如果大于delay，则直接执行；
    如果小于delay，则继续延后执行；
  */
 let timer = null
 const debounced = (...args) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay * 1000)
    // 如何将执行结果返回呢？
 }

 return debounced
}

// 时间戳版
// 时间戳版，似乎没有意义
function debounce2(fn, delay) {
  let curTime = null
  let timer = null

  return (...args) => {
    if (curTime === null || curTime + delay * 1000 < Date.now()) {
      curTime = Date.now()
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn(...args)
      }, delay * 1000)
      return
    }
    timer = setTimeout(() => {
      fn(...args)
    }, delay * 1000)
  }
}

/* 起始执行 */