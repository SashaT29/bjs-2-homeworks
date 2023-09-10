//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = md5(args); 
        let objectInCache = cache.find((item) => item.hash === hash); 
        if (objectInCache){
            return "Из кеша: " + objectInCache.value;
    }

    let result = func(...args);
    let resultObj = {
        hash: hash,
        value: result
    }
    cache.push(resultObj); 

    if (cache.length > 5) { 
       cache.shift();
    }
    
    return "Вычисляем: " + result;
}
    return wrapper;

}

  


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timerId = null;
    function resultFunction(...args) {
        if(resultFunction.allCount === 0) {
            func(...args);
            resultFunction.count++;
        }

        resultFunction.allCount++;

        clearTimeout(timerId);
        
        timerId = setTimeout(() => {
            func(...args);
            resultFunction.count++;
        }, delay)
    }

resultFunction.count = 0;
resultFunction.allCount = 0;

return resultFunction;
  
}
