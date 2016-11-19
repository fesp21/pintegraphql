<template>
  <div id="detail">
    <div id="card-block" class="md-display-3">
      <template v-for="image in userData.uploadedImages">
        <image-card
        :username="userData.username"
        :profilePicture="userData.profilePicture"
        :imageUrl="image.url"
        :imageDescription="image.description"
        :likeNumber="image.likedBy.length"
        >
        </image-card>
      </template>
    </div>
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
  computed: {
    username () {
      return this.$route.params.username
    },
    userData () {
      return this.$store.getters.getUserData(this.username)
    }
  }
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
