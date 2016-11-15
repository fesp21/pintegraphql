<template>
  <div id="home">
    <div id="card-block" class="md-display-3">
      <template v-if="loading === 1">Loading ... </template>
      <template v-else>
        <template v-for="image in allImages.edges">
          <image-card 
          :username="image.node.user.username" 
          :imageUrl="image.node.url" 
          :profilePicture="image.node.user.profilePicture" 
          :imageDescription="image.node.description"
          :likeNumber="image.node.likedBy.edges.length">
          </image-card>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard'
import imagesQuery from '../api/querys'

export default {
  name: 'Home',
  components: {ImageCard},
  data: () => ({
    allImages: [],
    loading: 0
  }),
  apollo: {
    allImages: {
      query: imagesQuery,
      loadingKey: 'loading',
      update (data) {
        return data.allImages
      }
    }
  }
}
</script>

<style>
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
</style>