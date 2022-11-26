<template>
  <div class="layout">

    <!-- <vue-cookie-accept-decline :ref="'myPanel1'" :elementId="'myPanel1'" :debug="false" :position="'bottom-left'"
      :type="'floating'" :disableDecline="false" :transitionName="'slideFromBottom'" :showPostponeButton="false"
      @status="cookieStatus" @clicked-accept="cookieClickedAccept" @clicked-decline="cookieClickedDecline">

      <div slot="postponeContent">
        &times;
      </div>

      <div slot="message">
        Utilizziamo i Cookie per migliorare la tua esperienza di navigazione. Leggi la <a href="#"
          target="_blank">Cookie Policy</a>
      </div>

      <div slot="declineContent">
        Nega
      </div>

      <div slot="acceptContent">
        Ok, acconsento!
      </div>
    </vue-cookie-accept-decline> -->

    <header class="header">
      <div class="header-box">
        <div class="logo order-2">
          <img src="../assets/images/icon/logo_offerta_super.svg" alt="logo" width="200" height="37" fit="contain" quality="90"  />
          <g-link class="logo-link" to="/">link</g-link>
        </div>

        <div class="header-element order-1">
          <NavBar />
          <ToggleTheme />

          <g-image class="contatti-header" src="~/assets/images/icon/contatti.svg" alt="" width="238" height="48" />
        </div>

        <g-image class="contatti-header-mob order-3" src="~/assets/images/icon/domande.svg" alt="" width="31" height="31" />


        <!-- <SearchWordPress />  -->
      </div>

    </header>

    <div class="content" v-if="!sidebar && !sidebarblog">
      <slot />
    </div>

    <div class="content content-side" v-if="sidebar">
      <div class="full-container">
        <div class="container container-sidebar">
          <slot />
          <div class="sidebar" v-if="sidebar">
            <site-sidebar />
          </div>
        </div>
      </div>
    </div>


    <div class="content content-side" v-if="sidebarblog">
      <div class="full-container">
        <div class="container container-sidebar">
          <slot />
          <div class="sidebar" v-if="sidebarblog">
            <site-sidebar-post />
          </div>
        </div>
      </div>
    </div>





    <div class="footer">
      <site-footer />
    </div>

  </div>
</template>

<script>
  import SiteFooter from '~/components/SiteFooter.vue'
  import ToggleTheme from '~/components/ToggleTheme.vue'
  import SiteSidebar from '~/components/SiteSidebar.vue'
  import SiteSidebarPost from '~/components/SiteSidebarPost.vue'
  import SearchWordPress from '~/components/SearchWordPress.vue'
  import NavBar from '~/components/NavBar.vue'

  export default {
    components: {
      SiteFooter,
      ToggleTheme,
      SiteSidebar,
      SiteSidebarPost,
      NavBar,
      SearchWordPress
    },
  props: ['sidebar', 'sidebarblog'],
    methods: {
    /* cookieStatus(status) {
      this.status = status;
    },
    cookieClickedAccept() {
      this.status = 'accept';
      
    },
    cookieClickedDecline() {
      this.status = 'decline';
    } */
  },
  computed: {
   /*  statusText() {
      return this.status || 'No cookie set';
    } */
  }
  }
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  .contatti-header {
    display: none;
  }
  .order-3 {
    order: 3;
    margin-left: 28px;
  }
  .order-2 {
    order: 2;
  }
  .order-1 {
    order: 1;
  }
    .header .menu-icon {
      padding-left: 0 !important;
    }
  
}

@media screen and (min-width: 768px) {
  .contatti-header-mob {
    display: none;
  }

}



.content-side {
  .container {
      grid-template-columns: 3fr 1fr !important;
      display: grid;
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr !important;
      }
    }
}
.logo {
  position: relative;

  .logo-link {
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
}

.header-box {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  z-index: 3;
  top: 0;
  grid-column: 2;
}

.header__right {
    display: flex;
    align-items: center;
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}
.sidebar {
  margin-top: 116px;
}

header {
    border-bottom: 1px solid var(--border-color);
    flex-wrap: nowrap;
    position: -webkit-sticky;
    position: sticky;
    transition: background-color .3s,border-color,.3s;
}

.footer {
 
  padding: calc(var(--space) / 2);
 
  font-size: .8em;
  > span {
    margin: 0 .35em;
  }
  a {
    color: currentColor;
  }
}
</style>



