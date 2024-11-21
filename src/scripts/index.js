import { getUser } from "./services/user.js"
import { getEvents, getRepositories } from "./services/repositories.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(verificandoInputVazio(userName)) return
    getUserData(userName)

})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const seEnterFoiPressionado = key === 13

    if (seEnterFoiPressionado) {
        if(verificandoInputVazio(userName)) return
        getUserData(userName)
    }
})


function verificandoInputVazio(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {

    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)
    
    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)  
    user.setEvents(eventsResponse)

    console.log(eventsResponse)
    
    screen.renderUser(user)
}