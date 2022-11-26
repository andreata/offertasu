<template>
 <div class="container-search">
    <input
      id="search"
      v-model="searchTerm"
      class="input input-search"
      type="text"
      placeholder="Cerca...">
    <div class="result-search">
        <g-link
        v-for="result in searchResults"
        :key="result.id"
        :to="result.uri"
        class="navbar-item">
        {{ result.title }}
        </g-link>
    </div>
 </div>
</template>

<static-query>

query   {
  
 posts(first: 200) {
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
            slug
            mimeType
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

import Flexsearch from "flexsearch"

export default {
 
  components: {
    Flexsearch
  },
  data: () => ({
      index: null,
      searchTerm: '',
      
  }),
  beforeMount() {
    this.index = new Flexsearch({
      tokenize: "forward",
      doc: {
        id: "id",
        field: [
          "title",
          "excerpt"
        ]
      }
    });
    this.index.add(this.$static.posts.edges.map(e => e.node));
  },
  computed: {
    searchResults() {
      if (this.index === null || this.searchTerm.length < 3) return [];
      return this.index.search({
        query: this.searchTerm,
        limit: 10
      });
    }
  },
}

</script>

<style lang="scss" scoped>
.container-search {
    margin-top: auto;
    margin-bottom: auto;
    .input-search {
        padding: .34rem .8rem;
        background-color: var(--bg-color);
        border-radius: var(--radius);
        border:1px solid var(--border-color);
        color: var(--body-color);
        @media screen and (max-width: 768px) {
            min-width: 97%;
            margin: auto;
            display: block;
        }
    }
    .result-search {
        position: absolute;
        max-width: 300px;
        display: flex;
        flex-wrap: wrap;
        a {
            background: var(--bg-color);
            display: block;
            padding: calc(var(--space) / 4) ;
            font-size: 0.7rem;
            min-width: 100%;
        }
    }
}
</style>
