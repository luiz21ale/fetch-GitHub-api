const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário">
                                                <div class="data">
                                                    <h1>${user.name ?? 'Não possui nome cadastrado 😒'}</h1>
                                                    <p>${user.bio ?? 'Não possui Bio 😒'}</p>
                                                    <p>Seguidores: 👤${user.seguidores ?? '0 Seguidores'}</p>   
                                                    <p>Seguindo: 👥 ${user.seguindo ?? 'Ainda não segue ninguem 😒'}
                                                </div>
                                        </div`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <br>🍴${repo.forks}  ⭐${repo.stargazers_count}</a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                                                <div class="repositories section">
                                                    <h2>Repositórios</h2>
                                                    <ul>${repositoriesItens}</ul>
                                                    
                                                </div>`
        }

        let eventosPush = '';

        user.eventos.forEach(events => {
            eventosPush += (events.payload.commits && events.payload.commits.length > 0)
                ? `<li><span>${events.repo.name} </span> - ${events.payload.commits[0].message}</li>`
                : `<li><span>${events.repo.name} </span> - Sem mensagem de commit</li>`;
        });

        this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Eventos</h2>
                                            <ul>${eventosPush}</ul>
                                        </div>`;
    },

    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }