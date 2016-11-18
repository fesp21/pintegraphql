<template>
  <div v-md-theme="'default'" class="app">
    <topbar title="PinteGraphQL" githubLink="https://github.com/marcosfede/pintegraphql"></topbar>
    <template class="page">
      <router-view :allUsers="allUsers"></router-view>
    </template>
  </div>
</template>

<script>
import store from '../vuex/store'
import Topbar from '../components/Topbar'
import images from '../vuex/Root/getters'

export default {
  store,
  components: {Topbar},
  name: 'App',
  data: () => ({
    allUsers: []
  }),
  vuex: {
    getters: {
      images: images
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
