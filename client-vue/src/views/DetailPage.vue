<template>
  <div id="detail">
    <template v-for="user in userData">
      <image-card :username="user.username" :imageUrl="user.imageUrl"></image-card>
    </template>
    <router-link to="/">
      <md-button class="md-raised">Home View</md-button>
    </router-link>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard'
export default {
  name: 'Detail',
  components: {ImageCard},
  data: () => ({
    userData: []
  })
}
</script>

<style>
  #detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>