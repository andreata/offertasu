<template>
  <div>
    <ClientOnly>
      <progressive-background class="imgage-fit" v-if="post.featuredImage" :src="srcMount"  />
    </ClientOnly>
  </div>
</template>

<script>

export default  {
  components: {
    
  },
  data() {
    return {
      srcMount: ''
    }
  },
  async mounted() {
    this.srcMount = this.post.featuredImage.node.mediaItemUrl
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  
  
}
</script>

