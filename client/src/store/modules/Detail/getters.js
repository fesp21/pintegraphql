export function getUserData (state, getters, rootState) {
  return function (user) {
    return rootState.users.find(usr => usr.username === user)
  }
}
