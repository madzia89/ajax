
//ta funkcja jest wywoływana przez konstruktor z dwoma parametrami, każda z nich jest funkcją
//możemy ją wywołać kiedy chcemy żeby promise była wypełniona (fulfilled)
var promise = new Promise(function(resolve, reject){
    //we can resolve when we want the promise to be fulfilled
    resolve('ala ma kota')
})

//it logs ala ma kota
//because
promise.then(console.log)