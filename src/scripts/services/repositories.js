import { baseUrl, repositoriesQuantity, eventos, token } from "../variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
    
    if (!response.ok) {
        throw new Error(`Erro ao obter repositórios: ${response.statusText}`);
    }

    return await response.json()
}

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventos}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })


    if (!response.ok) {
        throw new Error(`Erro ao obter repositórios: ${response.statusText}`);
    }

    return await response.json()
}

export {getRepositories, getEvents}