import * as types from './mutation-types'

// mutations
const mutations = {
  [types.RECIEVED_DATA] (state, users) {
    state.users = users
  }
}

export default mutations
