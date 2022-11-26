<template>
  <div>
    
  <div class="a-box">
    <!-- <div class="bg-box" :style="{ backgroundImage: `url(${post.featuredImage.node.mediaItemUrl})` }"> -->
      <div class="bg-box" >
        
          <ClientOnly>
            <progressive-background class="imgage-fit" v-if="post.featuredImage" :src="srcMount"  />
          </ClientOnly>

          <div class="content-box2">
            <h2 class="" v-html="post.title" />
            <formated-date class="post-date date font-weight-bold" :date="post.date"/>
            <div class="excerpt" v-html="post.excerpt.substring(0,70)+ '...'" />

             <g-link class="post-card__link" :to="post.uri">Link</g-link> 
          </div>

         

      </div>
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import FormatedDate from "~/components/FormatedDate.vue"




export default {
  components: {
    
    PostMeta,
    PostTags,
    FormatedDate,
    
    
    
  },
  data() {
    return {
      filename: '',
      srcMount: ''
    }
  },
  mounted() {
    //VueProgressiveImage = require('vue-progressive-image')
    this.srcMount = this.post.featuredImage.node.mediaItemUrl
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  created() {
    var url = this.post.featuredImage.node.mediaItemUrl
    this.filename = url.substring(url.lastIndexOf('/') + 1).toLowerCase()
  }, 
  
}
</script>

<style lang="scss" scoped>
a.a-box {
  text-decoration: none;
}
.post-card__link {
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 100;
}
 .excerpt p {
  color: white;
  position: relative;
  z-index: 999999999;
}
.bg-box {
  height: 300px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  background-position: center center;
  background-size: cover;
 
  h2 {
    position: relative;
    z-index: 99;
    transition: color .6s;
    color: white;
    margin: 4.75rem 0 0.5rem;
    font-size: 1.10rem;
    font-weight: 700;
    line-height: 1;
  }
  .content-box2 {
    padding: 8px;
    position: relative;
    width: 100%;
    margin-top: -290px;
    @media screen and (max-width: 768px) {
       margin-top: -350px;
    }
     &:before {
    content: "";
    z-index: 9;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(1deg, rgba(6, 4, 10, 0.98), #2f2d2d00 99%);
    position: absolute; 
    pointer-events: none;
  }
  }
  .progressive-image-main, .progressive-image {
    width: 100% ;
    height: 100%;
    object-fit: cover;
  }
 
  &:hover {
    /* transition-duration: 0.3s;
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1); */
  }
}

</style>
