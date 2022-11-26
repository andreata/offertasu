<template>
  <div class="box-category">
   <div class="a-box">
    <div class="bg-box">
        <div class="cat-bg-box">
          <h2 class="" v-html="post.name" />  
        </div>
    </div>
    <g-link class="a-link-box" :to="post.uri"></g-link>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.a-link-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 11;
}
.a-box {
  position: relative;
  text-decoration: none;
}

.box-category {
    width: 100%;
}

.cat-bg-box {
    width: 100%;
    text-align: center;
}

</style>
