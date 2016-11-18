import * as types from '../mutation-types'
import getUsers from '../../api/userService'

export const fetchData = ({ commit }) => {
  getUsers().then(users => commit(types.RECIEVED_DATA, users))
}
