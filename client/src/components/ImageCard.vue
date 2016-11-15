<template>
  <md-card md-with-hover>
    <md-card-header>
      <router-link :to="`/detail/${username}`">
        <md-avatar>
          <img v-if="profilePicture" :src="profilePicture" alt="thumbnail">
          <img v-else src="http://placehold.it/50x50" alt="thumbnail">
        </md-avatar>
      </router-link>

      <div class="md-title">{{imageDescription}}</div>
    </md-card-header>

    <md-card-media>
      <img v-if="imageUrl" :src="imageUrl" alt="thumbnail">
      <img v-else src="http://placehold.it/192x108" alt="Image">
    </md-card-media>

    <md-card-actions>
      <md-button>Action</md-button>
      <md-button>Action</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
  export default {
    name: 'UserCard',
    props: {
      imageUrl: {
        type: String,
        required: true
      },
      username: {
        type: String,
        required: true
      },
      profilePicture: String,
      imageDescription: String,
      likeNumber: Number
    }
}
</script>

<style scoped>
  .md-with-hover {
    margin: 20px 10px;
  }
  .md-card-media {
    height: 126px;
    width: 224px;
    
  }
  .md-card-media>img {
    height: inherit;
    width: inherit;
  }
  .md-title {
    font-size: 14px !important;
  }
  .md-card-header {
    padding: 12px !important;
  }
  .md-card-actions {
    display: flex;
    flex-direction: row;
    justify-content: center !important;
    align-items: center;
  }
</style>