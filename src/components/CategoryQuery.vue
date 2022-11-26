<template>
    <div> 
 
      <div v-for="{ node } in $static.categories.edges" :key="node.slug">
         <h2 class="title-cat-home"><span>{{ node.name }}</span></h2>

        <div class="container-box">
          <div class="item-box" v-for="{ node } in node.posts.edges" :key="node.id">
            <PostCardCategory :post="node" />
          </div>
        </div>
        
      </div>       
    </div>
</template>

<static-query>

  query {
    categories(first: 20) {
      edges {
        node {
          id
          name
          slug
          count
          link
          uri
          posts(first: 4) {
            edges {
              node {
                id
                title
                date
                link
                excerpt
                uri
                author {
                  node {
                    name
                  }
                }
                featuredImage {
                  node {
                    mediaItemUrl
                    altText
                    slug
                    mimeType
                    mediaDetails {
                      width
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }


</static-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import PostCard from '~/components/PostCard.vue'
import PostBox from '~/components/PostBox.vue'
import PostCardCategory from '~/components/PostCardCategory.vue'

export default {
  components: {
    Pager,
    Post,
    PostCard,
    PostBox,
    PostCardCategory
  },
  data() {
      return {
        settings: {
          arrows: true,
          dots: true,
        },
      }
    },

  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  
}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 768px) {
  .carousel-cell {
     width: 100%;
  }
}

.title-cat-home {
    position: relative;
    text-align: left;
    font-size: 36px;
    line-height: 1;
    text-transform: uppercase;
    color: var(--title-color);

    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
 
    span {
      position: relative;
      display: inline-block;
      background-color: var(--bg-color);
      padding-right: 16px;
      line-height: 1;
      font-weight: 700;
      color: var(--title-color);
      letter-spacing: 0;
    }
    &:before {
      position: absolute;
      width: 100%;
      content: ' ';
      height: 2px;
      left: 0;
      background-color: var(--title-color);
      bottom: 4px;
      box-sizing: border-box;
      transform: translatey(-50%);
    }
}

</style>

