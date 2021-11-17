/*
 * fn [function] 需要防抖的函数
 * delay [number] 毫秒，防抖期限值
 */
function debounce(fn: Function, delay: number): Function {
  let timer: number | undefined;
  return function() {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    } else {
      timer = setTimeout(fn, delay);
    }
  };
}

function throttle(fn: Function, delay: number): Function {
  let valid: boolean = true;
  return function() {
    if (!valid) {
      return false;
    }
    valid = false;
    setTimeout(() => {
      fn();
      valid = true;
    }, delay);
  };
}

export {
  debounce,
  throttle
}
