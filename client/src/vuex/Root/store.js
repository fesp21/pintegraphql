import * as types from '../mutation-types'
import * as actions from './actions'
import * as getters from './getters'
// initial state
const state = {
  users: []
}

// mutations
const mutations = {
  [types.RECIEVED_DATA] (state, users) {
    state.users = users
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
