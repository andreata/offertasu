<template>
  <div class="box-image" :style="{ backgroundImage: `linear-gradient(to bottom, rgba(55, 66, 69, 0.52), rgba(0, 0, 0, 0.73)), url(${post.featuredMedia.sourceUrl})`}">
    <g-link :to="post.path">
      <h2 v-html="post.title" />
    </g-link>
    <div class="excerpt" v-html="post.excerpt" />
    <g-link class="read-more" :to="post.path">
      Leggi altro
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }, 
}
</script>

<style scoped>
.excerpt {
  color: white;
}
.box-image {
    padding: 20px;
    margin: 0 5px;
    border-radius: 10px;
    min-height: 250px;
    background-size: cover;
}
.box-image h2 {
    color: white;
}
.box-image:before {
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    opacity: .4;
    background-image: linear-gradient(234deg,#394245,#000);
}
.read-more {
    text-transform: uppercase;
    opacity: .9;
    border: 1px solid;
    border-radius: 20px;
    padding: 4px;
    font-size: 10px;
    color: white !important;
}
</style>