(function () {
    fetch('https://randomuser.me/api/?results=6')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            render(data.results)
        })

    function render(users) {
        users.forEach(function (user) {
            document.body.appendChild(makeUserDiv(user))
        })
    }

    function makeUserDiv(user) {
        var name = user.name.first
        var pic = user.picture.thumbnail
        var mail = user.email

        var div = document.createElement('div')
        var img = document.createElement('img')
        var emailP = document.createElement('p')
        var nameP = document.createElement('p')

        div.style.border = '1px solid black'
        img.setAttribute('src', pic)
        nameP.innerText = name
        emailP.innerText = mail

        div.appendChild(img)
        div.appendChild(nameP)
        div.appendChild(emailP)

        return div

    }

})