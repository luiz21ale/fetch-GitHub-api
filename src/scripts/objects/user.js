const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    seguidores: '',
    seguindo: '',
    eventos: [],
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.seguidores = gitHubUser.followers
        this.seguindo = gitHubUser.following
    },

    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(eventos){
        this.eventos = eventos
    }
}

export { user }