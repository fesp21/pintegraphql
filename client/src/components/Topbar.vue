<template>
  <md-toolbar>
    <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>
    <h2 class="md-title" style="flex: 1">{{title}}</h2>
    <md-button :href="githubLink" class="md-icon-button">
      <md-icon>done</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
  export default {
    props: {
      title: String,
      githubLink: String
    }
  }
</script>