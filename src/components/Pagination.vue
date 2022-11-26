<template>
    <div class="posts">
      <PostCard v-for="{ node } in $page.posts.edges" :key="node.id" :post="node"/>
    </div>
</template>

<static-query>
query  {
 posts(where: {orderby: {field: DATE, order: DESC}}, first: 5, after: "YXJyYXljb25uZWN0aW9uOjMzMjQ=") {
  	pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
    }
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
}

</static-query>

<script>

import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard,

  }
}
</script>

<style scoped>

</style>

