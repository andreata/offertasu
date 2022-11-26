<template>
  <Layout :sidebar="true" class="side">




    <div>
      <div class="post-title">
        <h1>{{ $page.category.name }} </h1>
      </div>

      <div class="breadcrumbs">
        <ul>
          <li v-for="breadcrumb in $page.category.seo.breadcrumbs" :key="breadcrumb.text">
            <g-link :to="breadcrumb.url">{{ breadcrumb.text }}</g-link>
          </li>
        </ul>
      </div>

      <FirstBlogPost :post="edge.node" v-for="(edge, index) in $page.category.posts.edges" :key="edge.node.id"
        v-if="index <= 0" />

      <div class="content-category">
        <PostCardCategory :post="edge.node" v-for="(edge, index) in $page.category.posts.edges" :key="edge.node.id"
          v-if="index >= 1" />
      </div>

      <div class="max-width" v-if="$page.category.posts.edges.length > 5">

        <h3 class="recent-half">Post meno recenti</h3>
        <ul class="block-ul">
          <li v-for="(edge, index) in $page.category.posts.edges" :key="edge.node.id" v-if="index > 5">

            <g-link :to="edge.node.uri" v-html="edge.node.title" />&nbsp;
            <formated-date class="post-date date post-card__date" :date="edge.node.date" />
            </g-link>
          </li>
        </ul>

      </div>
      <script type="application/ld+json" class="yoast-schema-graph">
        {{$page.category.seo.schema.raw}}
      </script>
    </div>
  </Layout>
</template>

<page-query>

query Category ($slug: ID!) {
  category(idType: SLUG, id: $slug) {
    name
    posts(first: 30) {
      edges {
        node {
          id
          title
          date
          link
          excerpt
          uri
          categories {
            nodes {
              name
              slug
            }
            edges {
              node {
                id
                name
              }
            }
          }
          author {
            node {
              name
              description
              avatar {
                url
              }
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
import PostCardCategory from '~/components/PostCardCategory.vue'
import PostCardCarouselCategory from '~/components/PostCardCarouselCategory.vue'
import FormatedDate from "~/components/FormatedDate.vue"
import FirstBlogPost from "~/components/FirstBlogPost.vue"

export default {
  components: {
    Pager,
    Post,
    SiteSidebar,
    PostCardCategory,
    PostCardCarouselCategory,
    FormatedDate,
    FirstBlogPost,
  
  },
  metaInfo () {
    return {
      //title: this.$page.wordPressCategory.title
    }
  },
  data() {
    
    return {
      limitationList:15,
    }
  },
}
</script>

<style lang="scss" scoped>

.recent-half {
  width: 100%;
}
ul.block-ul {
    display: block;
    width: 100%;
    li {
      max-width: 90%;
    }
}
.carousel-cell {
  max-width: 150px;
}

.max-width {
  max-width: var(--content-width);
    margin: 0 auto;
    padding:0;
}
.post-title {
  @media screen and (min-width: 768px) {
    padding: calc(var(--space) / 2) 0 0 0;
  }
    padding-bottom: 0;
   
    margin: 0 auto;
}
@media screen and (max-width: 768px) {
  .post-title {
    margin-top: var(--space);
  }
  .post-title, .breadcrumbs {
    @media screen and (min-width: 768px) {
      padding: 0 var(--space);
    }
  }
}
.content-category {
  display: grid;
  /* @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  } */
  .post-card {
      margin: 3px;
  }
  
}
</style>