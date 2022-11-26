<template>
  <aside>
    <p class="title-sidebar">Categorie</p>
    <ul>
      <li class="cat-side" v-for="{ node } in $static.categories.edges" :key="node.slug">
        <g-link class="color-cat" :to="node.uri">{{ node.name }} ({{ node.count }})</g-link>
      </li>
    </ul>
  </aside>
</template>

<static-query>
query GetCategoryEdges {
  categories {
    edges {
      node {
        id
        name
        slug
        count
        link
        uri
      }
    }
  }
}

</static-query>

<style lang="scss" scoped>
.title-sidebar {
  color: var(--orang-color);
  font-size: 18px;
  font-weight: 800;
}
.color-cat {
  color: var(--title-color);
  font-weight: 800;
}
.cat-side {
  font-size: 14px;
  
}
.no-border {
  border: 0;
}
</style>