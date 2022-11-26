<template>
  <aside class="mb-5">
    <p class="title-sidebar">Tag</p>
    <ul class="list-inline">
      <li class="list-inline-item mb-2" v-for="{ node } in $static.tags.edges" :key="node.slug">
        <g-link :to="node.uri">{{ node.name }} ({{ node.count }})</g-link>
      </li>
    </ul>
  </aside>
</template>

<static-query>
query GetTagNodes {
  tags {
    edges {
      node {
        id
        name
        count
        link
        slug
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
.list-inline {
  grid-row-gap: 32px;
  li {
    margin: 0 4px;
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    flex-direction: column;
    -webkit-box-align: start;
    box-align: start;
    align-items: flex-start;
    box-pack: center;
    -webkit-box-pack: center;
    justify-content: center;
    max-width: 100%;
    overflow: hidden;
    box-flex: 1;
    flex-grow: 1;
    a {
      color: black;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: var(--light-orange);
      border-radius: 10px;
      padding: 3px 8px;
      font-size: 13px;
      margin-top: 5px;
      white-space: nowrap;
      
    }
  }
}
.tag-g {
  font-size: 10px;
    font-weight: var(--font-weight-primary-bold);
    display: inline-block;
    margin: 0 2px 1px 0;
    padding: 4px 10px;
    transition: all .15s ease;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-radius: 20px;
    border: 0;
    background-color: #f4f4f4;
    li {
      font-size: 14px;
    }
}
</style>