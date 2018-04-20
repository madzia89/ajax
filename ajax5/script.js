var promise = new Promise(/*tu przekazujemy funkcję którą konstruktor sobie wykona żeby stwierdzić czy tworzona promise jest spełniona czy nie*/function (resolve, reject) {
    var firstPromise = fetch('https://randomuser.me/api')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            resolve(data) //lub samo resolve()
        })
})