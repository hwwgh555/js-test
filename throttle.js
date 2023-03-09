function throttle(fn, threshold) {
  /*
  threshold区间时间范围内是否执行：
    已经执行，则不执行；
    未执行，则执行；
  */
  let initTime = null
  return (...args) => {
    if (initTime === null) {
      initTime = Date.now()
      return fn(...args)
    }
    if (Date.now() > initTime + threshold * 1000) {
      initTime = Date.now()
      return fn(...args)
    }
  }
}
