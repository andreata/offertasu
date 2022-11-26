<template>
  <div>
    <p class="title-sidebar">Articoli più letti</p>

    <piuLetti :post="edge.node" v-for="(edge, index) in $page.category.posts.edges" :key="edge.node.id" v-if="index <= 0" />
    <piuLettiNobg :post="edge.node" v-for="(edge, index) in $page.category.posts.edges" :key="edge.node.id" v-if="index >= 1" />

    <p class="title-sidebar">Ultime News</p>

    <ultimeNews :post="edge.node" v-for="(edge, index) in $page.category.posts.edges" :key="edge.node.id" v-if="index >= 1" />

    <categories-widget class="mb-5 cat-side" />
    <tags-widget class="mb-5" />
  </div>
</template>


<script>
import TagsWidget from '~/components/TagsWidget.vue'
import CategoriesWidget from '~/components/CategoriesWidget.vue'
import SearchWordPress from '~/components/SearchWordPress.vue'
import piuLetti from '~/components/piuLetti.vue'
import piuLettiNobg from '~/components/piuLettiNobg.vue'
import ultimeNews from '~/components/ultimeNews.vue'

export default {
  components: {
    TagsWidget,
    CategoriesWidget,
    SearchWordPress,
    piuLetti, 
    piuLettiNobg, 
    ultimeNews
  }
}
</script>

<style scoped>
.title-sidebar {
  color: var(--orang-color);
  font-size: 18px;
  font-weight: 800;
}



</style>