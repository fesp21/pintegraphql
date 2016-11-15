<template>
  <div v-md-theme="'default'" class="app">
    <topbar title="PinteGraphQL" githubLink="https://github.com/marcosfede/pintegraphql"></topbar>
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store'
  import Topbar from '../components/Topbar'
  export default {
    store,
    components: {Topbar},
    name: 'App'
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