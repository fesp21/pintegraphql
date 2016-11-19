<template>
  <div v-md-theme="'default'" class="app">
    <topbar title="PinteGraphQL" githubLink="https://github.com/marcosfede/pintegraphql"></topbar>
    <template class="page">
      <router-view ></router-view>
    </template>
  </div>
</template>

<script>
import Topbar from '../components/Topbar'
// import {allImages} from '../vuex/Root/getters'
import { mapActions } from 'vuex'

export default {
  components: {Topbar},
  name: 'App',
  methods: {
    ...mapActions(['fetchData'])
  },
  created () { this.fetchData() }
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
