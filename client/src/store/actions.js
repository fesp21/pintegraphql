import * as types from './mutation-types'
import {getUsers} from '../api/userService'

// actions recieve a context object with
// commit, dispatch, getters, rootState, and state keys
// unpack as necessary
export function fetchData ({commit}) {
  return getUsers().then(users => commit(types.RECIEVED_DATA, users))
}
