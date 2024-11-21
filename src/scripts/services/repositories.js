import { baseUrl, repositoriesQuantity, eventos } from "../variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventos}`)
    console.log(await response.json())
}

export {getRepositories, getEvents}