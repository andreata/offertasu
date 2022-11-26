<template>

        <ClientOnly>
          <carousel class="flik" :perPageCustom="[[768, 2], [1024, 4]]"  :paginationEnabled="true">
            <slide class="carousel-cell cat-home" v-for="{ node } in $static.categories.edges" :key="node.slug">
                <BoxCategory  :post="node"/>
            </slide>
          </carousel>  
        </ClientOnly> 
    
</template>

<static-query>
query {
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

<script>
import BoxCategory from '~/components/BoxCategory.vue'


export default {
  components: {
    BoxCategory,
    name: 'index',
    Carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch(),
  },
  
}
</script>


<style scoped>
.flik2 .carousel-cell {
  width: 200px;
}
.flik2 {
    padding-bottom: 30px;
    margin-left: calc( -100vw / 2 + 100% / 2 );
    margin-right: calc( -100vw / 2 + 100% / 2 );
    max-width: 100vw;
}
@media screen and (max-width: 768px) {
  .flik2 .carousel-cell {
    width: 170px;
  }
}

.flik2.full-width {
    margin-left: calc( -100vw / 2 + 100% / 2 );
    margin-right: calc( -100vw / 2 + 100% / 2 );
    max-width: 100vw;
}

</style>