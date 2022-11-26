<template>
<Layout >
  

    <!-- <div class="breadcrumbs">
      <ul>
          <li v-for="breadcrumb in $page.page.seo.breadcrumbs" :key="breadcrumb.text" >
              <g-link :to="breadcrumb.url">{{ breadcrumb.text }}</g-link>
          </li>
        </ul>
    </div> -->

    <div>
      <div class="post__header">
        <img
              v-if="$page.page.featuredImage"
              :src="$page.page.featuredImage.node.mediaItemUrl"
              :width="$page.page.featuredImage.node.mediaDetails.width"
              :alt="$page.page.featuredImage.altText"
            />
      </div>

      <div class="full-container bg-home-3">
        <div class="container">
          <h1 class="title-home">{{ $page.page.title }}</h1>
          <p class="text-center max-700" v-html="$page.page.pagina.primoParagrafoLanding" />
      
      
      
        </div>
      </div>

      <div class="full-container m-t-60 loghi">
        <div class="container">

      <!-- <div class="post-title">
        <h1 class="post-title__text" v-html="$page.page.title" />
      </div> -->

       


        <!-- Loghi -->
        <div class="">
          <p class="partner-fibra-font">I nostri partner per la fibra ottica</p>
          <div class="loghi-partner">
            <g-link to="/home-landing-one-step/"><g-image class="image-fibra" src="~/assets/images/icon/partner/tim.png" alt="" width="440" /></g-link>
            <g-link to="/home-landing-one-step/"><g-image class="image-fibra" src="~/assets/images/icon/partner/fastweb.png" alt="" width="440" /></g-link>
            <g-link to="/home-landing-one-step/"><g-image class="image-fibra" src="~/assets/images/icon/partner/wind.png" alt="" width="440" /></g-link>
            <g-link to="/home-landing-one-step/"><g-image class="image-fibra" src="~/assets/images/icon/partner/eolo.png" alt="" width="440" /></g-link>
            <g-link to="/home-landing-one-step/"><g-image class="image-fibra" src="~/assets/images/icon/partner/linkem.png" alt="" width="440" /></g-link>
            
          <!--  <g-image class="mobile-image" src="~/assets/images/icon/loghi-mobile.jpg" alt="" width="1440" /> -->
          </div>
        </div>

        </div>
        </div>

        <div class="full-container container-salmone">
          <div class="container">

      <div class="page-layout-grid">
        <div class="grid-p-1">

          <h2 v-html="$page.page.pagina.titoloPrimaCta" />
          <p v-html="$page.page.pagina.paragrafoPrimaCta" />

          <form-landing-dinamica />


          <div v-html="$page.page.content"/>


        
          
        </div>

        <div class="grid-p-2">
          <div class="stiky">
           
            <form-landing-dinamica />
          </div>
        </div>

      </div>

      

    
    </div> 
    </div>
    <!--<script type="application/ld+json" class="yoast-schema-graph">{{$page.page.seo.schema.raw}}</script>-->

  

    <div v-if="$page.page.pagina.visibilitaBloccoAccordion" />

  <div class="full-container m-t-60 m-b-60">
    <div class="container margin-nonoauto">
      <p class="h2">Domande Frequenti Fibra Ottica</p>
      <div class="grid-two-column">
        <div class="grid-col">

          <app-accordion class="mb-4">
            <template v-slot:title>
              <h5 class="accordion-h5"><span class="font-semibold text-xl">H5 - Lorem ipsum dolor sit amet</span></h5>
            </template>
            <template v-slot:content>
              <p>
                <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
                accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
                itaque consectetur impedit?
              </p>
            </template>
          </app-accordion>

          <app-accordion class="mb-4">
            <template v-slot:title>
              <h5 class="accordion-h5"><span class="font-semibold text-xl">H5 - Lorem ipsum dolor sit amet</span></h5>
            </template>
            <template v-slot:content>
              <p>
                <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
                accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
                itaque consectetur impedit?
              </p>
            </template>
          </app-accordion>

        </div>
        <div class="grid-col">

          <app-accordion class="mb-4">
            <template v-slot:title>
              <h5 class="accordion-h5"><span class="font-semibold text-xl">H5 - Lorem ipsum dolor sit amet</span></h5>
            </template>
            <template v-slot:content>
              <p>
                <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
                accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
                itaque consectetur impedit?
              </p>
            </template>
          </app-accordion>

          <app-accordion class="mb-4">
            <template v-slot:title>
              <h5 class="accordion-h5"><span class="font-semibold text-xl">H5 -Lorem ipsum dolor sit amet</span></h5>
            </template>
            <template v-slot:content>
              <p>
                <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
                accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
                itaque consectetur impedit?
              </p>
            </template>
          </app-accordion>
        
        </div>
      </div>
      

      </div>
      </div>


      <!-- Box Salmone con 5 icone -->
      
      <!-- <div class="full-container container-salmone">
        <div class="container">
          <h2 class="text-center mb-80">
            Perché affidarsi al primo selezionatore di offerte in Italia
          </h2>
          <div class="grid-five-column-1">
            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/analisi.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Analisi</h3>
                <p class="grey-font">Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Nulla vitae elit
                  libero, a pharetra augue. </p>
              </div>
            </div>
      
            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/confronto.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Confronto</h3>
                <p class="grey-font">Abbiamo selezionato le migliori soluzioni per la tua casa e ti garantiamo l’offerta
                  al miglior prezzo </p>
              </div>
            </div>
      
            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/icon-risparmio.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Risparmio</h3>
                <p class="grey-font">Con la nostra soluzione risparmierai fino a240€/anno </p>
              </div>
            </div>
      
            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/sicurezza.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Sicurezza</h3>
                <p class="grey-font">Ti garantiamo la miglior assistenza sulla tua offerta e potrai sempre contattarci
                  per
                  qualsiasi esigenza </p>
              </div>
            </div>
      
            <div>
              <g-image class="img-salmone" src="~/assets/images/icon/affidabili.svg" alt="" width="60" />
              <div>
                <h3 class="orange-font">Affidabilità</h3>
                <p class="grey-font">Il nostro servizio è affidabile e gratis, siamo l’unico servizio ad affidarti un
                  consulente dedicato che potrai contattare SEMPRE! </p>
              </div>
            </div>
            <div>
      
            </div>
          </div>
        </div>
      </div> -->



        <!-- Box Salmone con 5 icone -->
        
       <!--  <div class="full-container ">
          <div class="container">
            <h2 class="text-center mb-80">
              I nostri valori
            </h2>
            <div class="grid-four-column">
              <div>
                <g-image class="img-salmone" src="~/assets/images/icon/affidabili.svg" alt="" width="60" />
                <h3 class="orange-font">Affidabilità</h3>
                <p class="grey-font">Il nostro servizio è affidabile e gratis, siamo l’unico servizio ad
                  affidarti un consulente dedicato che potrai contattare SEMPRE!</p>
              </div>
              <div>
                <g-image class="img-salmone" src="~/assets/images/icon/affidabili.svg" alt="" width="60" />
                <h3 class="orange-font">Affidabilità</h3>
                <p class="grey-font">Il nostro servizio è affidabile e gratis, siamo l’unico servizio ad
                  affidarti un consulente dedicato che potrai contattare SEMPRE!</p>
              </div>
              <div>
                <g-image class="img-salmone" src="~/assets/images/icon/affidabili.svg" alt="" width="60" />
                <h3 class="orange-font">Affidabilità</h3>
                <p class="grey-font">Il nostro servizio è affidabile e gratis, siamo l’unico servizio ad
                  affidarti un consulente dedicato che potrai contattare SEMPRE!</p>
              </div>
        
              <div>
                <g-image class="img-salmone" src="~/assets/images/icon/affidabili.svg" alt="" width="60" />
                <h3 class="orange-font">Affidabilità</h3>
                <p class="grey-font">Il nostro servizio è affidabile e gratis, siamo l’unico servizio ad
                  affidarti un consulente dedicato che potrai contattare SEMPRE!</p>
              </div>
        
            </div>
          </div>
        </div> -->

    </div>
  </Layout>
</template>

<page-query>

query Page ($slug: String) {
  page: pageBy(uri: $slug) {
    title
    slug
    link
    featuredImage {
      node {
        altText
        link
        sourceUrl
        mediaDetails {
            width
          }
      }
    }
    pagina {
      primoParagrafoLanding
      paragrafoPrimaCta
      titoloPrimaCta
      visibilitaBloccoAccordion
    }
    
    date
    
    content
    
    seo {
      breadcrumbs {
        text
        url
      }
      schema {
        raw
      }
      canonical
      metaDesc
      metaKeywords
      title
      twitterDescription
      cornerstone
      focuskw
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphDescription
      opengraphImage {
        mediaItemUrl
      }
    }
    
  }
}

</page-query>

<script>
import FormLandingDinamica from '~/components/FormLandingDinamica.vue'
import AppAccordion from '~/components/AppAccordion.vue'

export default {
  components: {
    FormLandingDinamica,
    AppAccordion
  },
  metaInfo () {
   /*  return {
      title: this.$page.page.seo.title,
      meta: [
        {
          description: this.$page.page.seo.metaDesc,
          key: this.$page.page.seo.metaKeywords,
        }
      ],
    } */
  }
  
}


</script>

<style lang="scss">
.margin-nonoauto {
  margin: unset;
      width: 100%;
}
.h2 {
  font-size: 25px;
  font-weight: 700;
}

.wp-block-button__link {
      padding: 15px;
        border: 1px solid var(--orang-color);
        border-radius: 30px;
        background-color: var(--salmone);
        color: var(--orang-color);
        font-size: 16px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
}



.grid-five-column-1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 40px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .stiky {
      position: fixed !important;
      bottom: 0;
      top: auto !important;
      margin: 0;
      padding: 0;
      width: 100%;
      left: 0;
      border-top: 1px solid #f58600;
      z-index: 999;
      section {
        margin: 0 !important;
      }
  }
  .bg-home-3 {
        padding-bottom: 28px;
  }
}

.accordion-h5 {
  margin: 0 !important;
}

.grid-four-column {
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;

    &>div {
      margin-bottom: 20px;
    }
  }

  &>div {
    background-color: white;
    padding: 34px 15px;
    text-align: center;
    box-shadow: 0px 10px 15px rgba(116, 116, 116, 0.16);
    border-radius: 1px;
  }
}

.grid-two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.m-t-60 {
  margin-top: 60px;
}

.m-b-60 {
  margin-bottom: 60px;
}
.page-layout-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 15px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .grid-p-2 {
    .stiky {
      position: sticky;
      top: 80px;
    }
  }
}
.bg-home-3 .container {
  margin-bottom: 50px;
}

@media screen and (max-width: 768px) {
  .bg-home-3 .container {
    margin-bottom: 0px;
  }

  .title-home {
    margin-top: 20px;
  }

  .orange-home {
    line-height: 1.3;
    font-size: 20px !important;
  }
}

.orange-home {

  font-size: 28px;
  text-align: center;
  color: var(--strong-orange);
}

.orange-home-2 {
  font-size: 24px;
  color: var(--strong-orange);
  line-height: 1;
}


.title-home {
  margin-top: 40px;
  text-align: center;
}
.post-title {
    padding: calc(var(--space) / 2) 0 0 0;
    //max-width: var(--content-width);
    margin: 0 auto;
    padding-left: 0 !important;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);
  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
@media screen and (max-width: 768px) {
  .post-title {
    margin-top: var(--space);
  }
  .post-title, .breadcrumbs {
      padding: 0 var(--space);
  }
}

.loghi {
  .container {
        width: 100%;
  }
}

.loghi-partner {
  min-width: 100%;
  .image-fibra {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 6px;
    padding: 8px;
    &:first-child {
      margin-left: 0px;
    }
  }
  
}
.max-700 {
  max-width: 1200px;
}
.partner-fibra-font {
  font-family: "Lexend";
  font-weight: 600;
  line-height: 1.15;
  font-size: 1.6em;
}
</style>



