<template>
  <div id="home">
    <div id="card-block" class="md-display-3">
      <template v-for="image in allImages">
        <image-card
        :username="image.user.username"
        :profilePicture="image.user.profilePicture"
        :imageUrl="image.url"
        :imageDescription="image.description"
        :likeNumber="image.likedBy.length"
        >
        </image-card>
      </template>
    </div>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {ImageCard},
  props: ['allUsers'],
  computed: {
    ...mapGetters(['allImages'])
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
