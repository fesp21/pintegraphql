<template>
  <div id="home">
    <div id="card-block" v-masonry="{columnWith: 200}" class="md-display-3 grid">
      <template v-for="user in allUsers.edges">
        <template v-for="image in user.node.uploadedImages.edges">
          <image-card
          class="grid-item"
          :username="user.node.username"
          :profilePicture="user.node.profilePicture"
          :imageUrl="image.node.url"
          :imageDescription="image.node.description"
          :likeNumber="image.node.likedBy.edges.length"
          >
          </image-card>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard'
export default {
  name: 'Home',
  components: {ImageCard},
  props: ['allUsers']
}
</script>

<style>
/*
  #home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #card-block {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  */
</style>
