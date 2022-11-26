<template>
  <div class="post-card " >
      <!-- If wonna like images 
           :style="{ backgroundImage: `url(${post.featuredImage.node.mediaItemUrl})` }" -->
      <h2 v-html="post.title" />
      <g-link class="post-card__link" :to="post.uri">Link</g-link>      
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.post-card {
  position: relative;
   h2 {
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: var(--bg-content-color);
    color: var(--link-color);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
