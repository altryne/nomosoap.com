export const state = () => ({
  manufacturers: []
})

export const mutations = {

}

export const actions = {
    nuxtServerInit ({ commit }, { req }) {
      let client = context.app.apolloProvider.defaultClient
      client.query(gql`        
        query {
          allPages{
            id,
            slug,
            body
          }
        }
      `).then(function({data}){
        debugger
        this.state.manufacturers = data.allPages
      })
    }
}
