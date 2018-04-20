(function () {
    var button = document.querySelector('button')
    button.addEventListener('click', function () {
       var dataPromise = change()
        dataPromise
            .then(function (data) {
                showName(data.results[0])
            })
    })
    $ rm -rf .git
    function change() {
        var promise = fetch('https://randomuser.me/api')
            .then(function (response) {
                return response.json()
            })
        return promise
    }

    function showName(user) {
        var div = document.querySelector('div')
        var firstName = user.name.first
        var lastName = user.name.last
        //spróbuj zrobić tak aby pierwsze litery były z dużej litery
        div.innerText = firstLetter(firstName) + " " + firstLetter(lastName)
    }

    function firstLetter(str) {
        return str
            .split('')
            .map(function (letter, i) {
                return i ? letter : letter.toUpperCase()
            })
            .join('')
    }
})()