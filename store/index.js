import Vuex from 'vuex'
import query from '~/graphql/queries/all.graphql'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 1,
      apollo_data: {
        "alex": " hello"
      }
    }),
    mutations: {
      increment(state) {
        state.counter++
      },
      inject_apollo_data(state, apollo_data){
        state.apollo_data = apollo_data
      }
    },
    actions: {
      async nuxtServerInit({commit}, context) {
        let client = context.app.apolloProvider.defaultClient
        let result = await client.query({
          query: query
        })
        commit('inject_apollo_data', result.data)
      }
    }
  })
}

export default createStore
