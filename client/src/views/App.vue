<template>
  <div v-md-theme="'default'" class="app">
    <topbar title="PinteGraphQL" githubLink="https://github.com/marcosfede/pintegraphql"></topbar>
    <template class="page">
      <router-view ></router-view>
    </template>
  </div>
</template>

<script>
import store from '../vuex/store'
import Topbar from '../components/Topbar'
import {allImages} from '../vuex/Root/getters'
import {fetchData} from '../vuex/Root/actions'

export default {
  store,
  components: {Topbar},
  name: 'App',
  created: fetchData
  vuex: {
    actions: {
      fetchData
    }
  }
}
</script>

<style>
.page {
  margin-top: 50px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
