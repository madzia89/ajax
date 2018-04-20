(function () {
    fetch('https://randomuser.me/api/?results=10')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            render(data.results)
        })
        .catch(function(fail){
            console.log('there\'s been some mistake. All I\'ve got is: ' + fail)
        })

    function render(users) {
        users.forEach(function (user) {
            document.body.appendChild(makeUserDiv(user))
        })
    }

    function makeUserDiv(user) {
        var name = user.name.first
        var pic = user.picture.thumbnail
        var surname = user.name.last
        var tel = user.phone


        var div = document.createElement('div')
        var img = document.createElement('img')
        var nameP = document.createElement('p')
        var surnameP = document.createElement('p')
        var phone = document.createElement('p')

        div.style.border = '1px solid black'
        img.setAttribute('src', pic)
        nameP.innerText = name
        surnameP.innerText = surname
        phone.innerText = tela

        div.appendChild(img)
        div.appendChild(nameP)
        div.appendChild(surnameP)
        div.appendChild(phone)
        nameP.addEventListener('click', function () {
            alert(user.gender)
        })

        return div

    }

})()