//防抖
export function debounce(func, wait, immediate) {
    let arg,context,result,timer
    const debounce = function () {
        context = this
        arg = arguments
        if(timer) clearTimeout(timer)
        if (immediate) {
            let callNow = !timer
            timer = setTimeout(() => {
                timer = null
            }, wait);
            if(callNow) result = func.apply(context, arg)
        } else {
            timer = setTimeout(() => {
                func.apply(context, arg)
            }, wait);
        }
    }
    debounce.cancel = function () {
        if(timer) {
            clearTimeout(timer)
            timer = null
        }
    }
    return debounce
}
//节流
export function throttle(func, wait) {
    let context, arg, previous = 0, remaining, timer 
    const later = function() {
        previous = +new Date();
        timer = null;
        func.apply(context, arg)
    }
    const throttle = function() {
        context = this
        arg = arguments
        now = +new Date()
        remaining = wait - (now - previous)
        if(remaining <= 0 || remaining > wait) {
            if(timer) {
                clearTimeout(timer)
                timer = null
            }
            previous = now
            func.apply(context, arg)
        }else if(!timer){
            timer = setTimeout(later, remaining);
        }
    }
    return throttle
}
//数组去重
export function unique(arr) {
    return [...new Set(arr)]
}
//数组去重包括对象
export function uniqueObj(arr) {
    let obj = {}
    return arr.filter((item, index, array) => {
        return obj.hasOwnProperty(typeof item + JSON.stringify(item))? false : obj[item] = true 
    })
}
//数组最大值 
export function maxArr(arr) {
    return Math.max(...arr)
}
//深克隆
export function deepclone(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}