<template>
  <div class="post-card content-box">
    <div class="post-card__header">
     
       <img alt="" v-if="post.featuredImage.node" class="post-card__image" :src="post.featuredImage.node.mediaItemUrl" />
     
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="post.title" />
       <div class="post-card__description" v-html="post.excerpt" />  

      <g-link class="post-card__link" :to="post.uri">Link</g-link> 

    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags,
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
  margin-bottom: var(--space);
  position: relative;
  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    @media screen and (max-width: 768px) {
      margin-left: calc(var(--space) * -0.5);
      margin-right: calc(var(--space) * -0.5);
    }
    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
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
