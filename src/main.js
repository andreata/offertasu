// Import main css
import '~/assets/style/index.scss'
import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import VueDisqus from 'vue-disqus'

import "@fontsource/lexend";
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';


import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css'


export default function (Vue, { head, isClient }) {

  

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'it' }


  head.meta.push({
    name: 'robots',
    content: 'index, follow'
  })

  head.meta.push({
    name: 'googlebot',
    content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  })

  head.meta.push({
    name: 'bingbot',
    content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
  })


  Vue.component('Layout', DefaultLayout)
  Vue.use(VueDisqus)

  Vue.component('vue-cookie-accept-decline', VueCookieAcceptDecline)

  
  if (process.isClient) {



    const VueProgressiveImage = require('vue-progressive-image').default;
    
    Vue.use(VueProgressiveImage, {
    blur: 30,
    delay: 2000
  })
}
  
}


