<template>
  <div v-md-theme="'default'" class="app">
    <topbar title="PinteGraphQL" githubLink="https://github.com/marcosfede/pintegraphql"></topbar>
    <template v-if="loaded" class="page">
      <router-view :allUsers="allUsers"></router-view>
    </template>
    <template v-else>
      loading...
    </template>
  </div>
</template>

<script>
import store from '../vuex/store'
import Topbar from '../components/Topbar'
import allUsersQuery from '../api/querys'

export default {
  store,
  components: {Topbar},
  name: 'App',
  data: () => ({
    allUsers: [],
    loaded: false
  }),
  apollo: {
    allUsers: {
      query: allUsersQuery,
      update (data) {
        this.loaded = true
        return data.allUsers
      }
    }
  }
}
</script>

<style>
/*
.page {
  margin-top: 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
*/
</style>
