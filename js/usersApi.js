const API__URL = 'https://randomuser.me/api/?results=1',
      userList = document.querySelector('.users'),
      addUserBtn = document.querySelector('.btn-add-user')


function createNode (el) {
    return document.createElement(el)
}

function append(parent, el){
    return parent.appendChild(el)
}

addUserBtn.addEventListener('click', () =>{
    let usersElement = document.querySelectorAll('.user__li')
    if (usersElement.length < 10) {

        newList()
    }
    if (usersElement.length > 1) {
        usersElement.forEach(el => {
            el.addEventListener('click', () =>{
                el.remove()
            })
        })
    }
})


const newList = () =>{
    fetch(API__URL)
    .then((resp) => resp.json())
    .then(function(data){
        let users = data.results
        console.log(users);
        return users.map(function(user) {
            let li = createNode('li')
            let div = createNode('div')
            let img = createNode('img')
            let p = createNode('p')
            let span = createNode('span')
            img.src = user.picture.medium
            p.innerHTML = `${user.name.first} ${user.name.last}`
            span.innerHTML = user.email
            div.classList.add('user__pop-up')
            li.classList.add('user__li')
            append(li, img)
            append(div, p)
            append(div, span)
            append(li, div)
            append(userList, li)
        })
    })

    .catch(function(error){
        console.log(error);
    })


}


newList()