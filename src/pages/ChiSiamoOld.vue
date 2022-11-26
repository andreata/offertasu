<template>
    <Layout>
        <div>
            <div class="full-container bg-home-3">
                <div class="container">
                    <h1 class="title-home">Chi siamo</h1>
                    <p class="p-home">Noi di Offerta Super crediamo che nessuno dovrebbe spendere troppo tempo e troppi
                        soldi per internet, telefono, luce e gas.</p>
                    <p class="orange-home font-bold">Per questo ci impegniamo ogni giorno per selezionare le migliori
                        offerte online con soluzioni smart e innovative.</p>



                </div>
            </div>


            <!-- Copy e Immagine -->

            <div class="full-container">
                <div class="container">
                    <div class="grid-two-column">
                        <div class="block-content-img">
                            <g-image class="img-promo" src="~/assets/images/icon/eroe-lente.svg" alt="" width="400" />
                        </div>
                        <div class="flex-content-copy">
                            <div>
                                <h2>Risparmio garantito su internet, telefono, luce e gas. </h2>
                                <p class="orange-home-2">Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                    Cras mattis consectetur</p>
                                <p class="content-2">Integer posuere erat a ante venenatis dapibus posuere velit
                                    aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi
                                    leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est
                                    at lobortis.
                                    Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis
                                    interdum. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula
                                    porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                                    dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Box Salmone con 5 icone -->

            <div class="full-container container-salmone">
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
            </div>


            <!-- Team -->

            <div class="full-container">
                <div class="container">
                    <h2 class="text-center mb-80">
                        La nostra squadra
                    </h2>
                    <div class="grid-four-column-no-bg">
                        <div>
                            <g-image class="img-salmone" src="~/assets/images/icon/marco.png" alt="" width="" />
                            <h3 class="orange-font text-uppercase text-center m-t-0">Marco Masi</h3>
                            <p class="grey-font text-uppercase text-center">CEO & Founder</p>
                        </div>
                        <div>
                            <g-image class="img-salmone" src="~/assets/images/icon/marco.png" alt="" width="" />
                            <h3 class="orange-font text-uppercase text-center m-t-0">Marco Masi</h3>
                            <p class="grey-font text-uppercase text-center">CEO & Founder</p>
                        </div>
                        <div>
                            <g-image class="img-salmone" src="~/assets/images/icon/marco.png" alt="" width="" />
                            <h3 class="orange-font text-uppercase text-center m-t-0">Marco Masi</h3>
                            <p class="grey-font text-uppercase text-center">CEO & Founder</p>
                        </div>

                        <div>
                            <g-image class="img-salmone" src="~/assets/images/icon/marco.png" alt="" width="" />
                            <h3 class="orange-font text-uppercase text-center m-t-0">Marco Masi</h3>
                            <p class="grey-font text-uppercase text-center">CEO & Founder</p>
                        </div>

                    </div>
                </div>
            </div>

            <!-- BG -->
            <div class="full-container container-image-bg">
            </div>

            <div class="full-container partner">
                <div class="container">
                    <h2 class="text-center mb-80">
                        I nostri partner
                    </h2>
                    <p class="p-home">Offerta Super seleziona per te le migliori offerte del mercato.
                        Ecco chi sono i nostri partner:</p>
                    <g-image class="img-salmone" src="~/assets/images/icon/icone-fornitori.png" alt="" width="" />
                    <g-image class="img-salmone" src="~/assets/images/icon/icone-fornitori.png" alt="" width="" />
                    <g-image class="img-salmone" src="~/assets/images/icon/icone-fornitori.png" alt="" width="" />
                </div>
            </div>






        </div>
    </Layout>
</template>

<page-query>



</page-query>

<script>
import { Pager } from 'gridsome'
import FormLanding from '~/components/FormLanding.vue'

export default {
    components: {
        Pager,
        FormLanding,

        Carousel: () =>
            import('vue-carousel')
                .then(m => m.Carousel)
                .catch(),
        Slide: () =>
            import('vue-carousel')
                .then(m => m.Slide)
                .catch(),
    },


    metaInfo() {
        return {
            title: 'Offerta Super | Selezioniamo le migliori offerte per te',
            meta: [
                {
                    description: 'Offerta Super è un selezionatore online, in grado di selezionare le migliori offerte per te',
                    key: 'Offerta Super',
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'Offerta Super',
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: 'Offerta Super',
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: 'Offerta Super',
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: 'Offerta Super',
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: '',
                },
            ],
        }
    }
}

</script>

<style lang="scss" soped>
@media screen and (min-width: 1850px) {
    .bg-cielo .VueCarousel-wrapper {
        margin-left: calc((100% - 1440px) / 2);
    }
}

@media screen and (max-width: 1850px) {
    .bg-cielo .VueCarousel-wrapper {
        margin-left: calc(14.2%);
    }
}

.partner {
    margin: 100px 0;

    .img-salmone {
        margin-top: 10px;
    }
}


.bg-home-3 .container {
    margin-bottom: 200px;
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
    text-align: center;
}

.grid-four-column {
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

.grid-four-column-no-bg {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
}

.grid-two-column {
    display: grid;
    grid-template-columns: 45% 55%;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
}

.block-content-img {
    margin: auto;
    display: block;
}

.flex-content-copy {
    display: flex;
    align-content: center;
}

.container-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;

    @media screen and (min-width: 768px) {
        margin-top: 40px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .item-box {
        padding: 3px;
    }
}

.carousel-cell {
    width: 100%;
}

@media screen and (max-width: 768px) {
    .container-box {
        flex-wrap: wrap;
    }

    .carousel-cell {
        width: 100%;
    }
}

.light {
    font-weight: 100;
}
</style>