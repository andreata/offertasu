<template>
  <Layout  class="side">
    <div>
      <div class="post-title">
        <h1>{{ $page.tag.name }} </h1> 
      </div>

        <!-- <div class="breadcrumbs">
          <ul>
              <li v-for="breadcrumb in $page.tag.seo.breadcrumbs" :key="breadcrumb.text" >
                  <g-link :to="breadcrumb.url">{{ breadcrumb.text }}</g-link>
              </li>
            </ul>
        </div> -->

        <div class="content-tag max-width">
          <PostCardTag v-for="{ node } in $page.tag.posts.edges" :key="node.id" :post="node"/>
        </div>
      </div>
      <script type="application/ld+json" class="yoast-schema-graph">{{$page.tag.seo.schema.raw}}</script>
  </Layout>
</template>


<page-query>
query Tag ($slug: ID!) {
  tag(idType: SLUG, id: $slug) {
    name
    posts {
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
              mediaDetails {
                width
              }
            }
          }
        }
      }
    }
    seo {
      breadcrumbs {
        text
        url
      }
      schema {
        raw
      }
      canonical
      metaDesc
      metaKeywords
      title
      twitterDescription
      cornerstone
      focuskw
      metaRobotsNofollow
      metaRobotsNoindex
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import SiteSidebar from '~/components/SiteSidebar.vue'
import PostCardTag from '~/components/PostCardTag.vue'

export default {
  components: {
    Pager,
    Post,
    SiteSidebar,
    PostCardTag
  },
  metaInfo () {
    return {
      title: this.$page.tag.seo.title
    }
  }
}
</script>

<style lang="scss">
.max-width {
    max-width: var(--content-width);
    margin: 0 auto;
    padding:0;
}
.post-title {
    padding: calc(var(--space) / 2) 0 0 0;
    max-width: var(--content-width);
    margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .post-title {
      margin-top: var(--space);
  }
  .post-title, .breadcrumbs {
      padding: 0 var(--space);
  }
}
.content-tag {
  display: flex;
  flex-wrap: wrap;
  justify-self: start;
  &:after {
      content: '';
      flex: auto;
    }
  .content-box {
    max-width: 33%;
    @media screen and (max-width: 1280px) {
      max-width: 49%;
    }
  }
}
</style>