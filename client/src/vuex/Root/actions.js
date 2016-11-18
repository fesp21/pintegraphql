import * as types from '../mutation-types'
import getUsers from '../../api/userService'

export const fetchData = ({ dispatch }) => {
  getUsers().then(users => dispatch(types.RECIEVED_DATA, users))
}
