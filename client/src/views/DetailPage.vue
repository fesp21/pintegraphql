<template>
  <div id="detail">
    <div id="card-block" class="md-display-3">
      <template v-for="image in user.node.uploadedImages.edges">
        <image-card
        :username="user.node.username"
        :profilePicture="user.node.profilePicture"
        :imageUrl="image.node.url"
        :imageDescription="image.node.description"
        :likeNumber="image.node.likedBy.edges.length"
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
  props: ['allUsers'],
  computed: {
    user () {
      return this.allUsers.edges.find(el => el.node.username === this.$route.params.username)
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
