<template>
  <Layout :sidebarblog="true" class="side">
    <div>

      <div class="post-title">
        <h1 class="post-title__text" v-html="$page.post.title" />
      </div>

      <div class="breadcrumbs">
        <ul>
          <li v-for="breadcrumb in $page.post.seo.breadcrumbs" :key="breadcrumb.text">
            <g-link :to="breadcrumb.url" v-html="breadcrumb.text"></g-link>


          </li>
        </ul>
      </div>

      <div class="post content-box">
        <div class="post__header">
          <img v-if="$page.post.featuredImage" :src="$page.post.featuredImage.node.sourceUrl"
            :alt="$page.post.featuredImage.altText" />
        </div>

        <div v-html="$page.post.content" />

        <g-image v-if="$page.post.author.node.avatar.url" :src="$page.post.author.node.avatar.url"
          class="author-image" />
        <p>{{$page.post.author.node.name}}</p>
        <p v-if="$page.post.author.node.description">{{$page.post.author.node.description}}</p>

        <div v-if="$page.post.categories.nodes.length">
          <h4>Ti potrebbe interessare anche</h4>
          <ul>
            <div v-for="node in $page.post.categories.nodes" :key="node.id">

              <li v-for="edge in node.posts.edges" :key="edge.node.id">
                <g-link :to="edge.node.uri">{{ edge.node.title }}</g-link>
              </li>

            </div>
          </ul>
        </div>


        <template v-if="$page.post.categories.nodes.length">
          <h4>Postato in</h4>
          <ul class="list categories">

            <li v-for="node in $page.post.categories.nodes" :key="node.id">
              <g-link :to="node.link">{{ node.name }}</g-link>
            </li>

          </ul>
        </template>
        <template v-if="$page.post.tags.edges.length">
          <h4>Tags</h4>
          <ul class="list tags">
            <li v-for="edge in $page.post.tags.edges" :key="edge.node.name">
              <g-link :to="edge.node.uri" v-html="edge.node.name"></g-link>
            </li>
          </ul>
        </template>

        <!-- <Disqus shortname="" :identifier="$page.post.title" /> -->

      </div>

      <script type="application/ld+json" class="yoast-schema-graph">
        {{$page.post.seo.schema.raw}}
      </script>

    </div>
  </Layout>
</template>


<page-query>

query Post ($slug: String) {

  post: postBy(slug: $slug) {
    title
    postId
    slug
    link
    featuredImage {
      node {
        altText
        link
        sourceUrl
        mediaDetails {
            width
          }
      }
    }
    excerpt
    date
    author {
      node {
        name
        description
        avatar {
          url
        }
      }
    }
    content
    categories {
      nodes {
        name
        id
        link
        posts(first: 2) {
          edges {
            node {
              id
              title
              uri
            }
          }
        }
      }
    }
    tags {
      edges {
        node {
          databaseId
          id
          uri
          link
          name
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
      opengraphDescription
      opengraphImage {
        mediaItemUrl
      }
    }
      
  }
}

</page-query>

<script>
import SiteSidebarPost from '~/components/SiteSidebarPost'
import VueDisqus from 'vue-disqus'

export default {
  
  components: {
    SiteSidebarPost,
    VueDisqus
  },
  
  metaInfo () {
    return {
      title: this.$page.post.seo.title,
      meta: [
      {
        description: this.$page.post.seo.metaDesc,
        key: this.$page.post.seo.metaKeywords,
        canonical: this.$page.post.seo.canonical,
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: this.$page.post.seo.title,
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: this.$page.post.seo.title,
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: this.$page.post.seo.opengraphDescription,
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: this.$page.post.seo.twitterDescription,
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: this.$page.post.seo.opengraphImage.mediaItemUrl,
      },
    ],
    }
  },  

}




</script>

<style lang="scss">
.post-title {
    padding: calc(var(--space) / 2) 0 0 0;
  
    margin: 0 auto;
}
.sidebar {
  padding: 0 20px;
}
.post {
  .author-image {
    max-width: 40px;
    border-radius: 50%;
  }
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }
    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);
  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}

@media screen and (max-width: 768px) {
  .post-title {
    margin-top: var(--space);
  }
  .post-title, .breadcrumbs {
      padding: 0 var(--space);
  }
}
</style>



