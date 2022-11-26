<template>
  <footer>
    <div class="full-container ">
      <div class="container">
        <div class="grid-footer">
          <div>
            <g-image src="~/assets/images/icon/logo-footer.png" alt="" width="600" />
            <p>SALES PERFORMANCE SRLP.IVA IT03539390835</p>
            <p><a href="#">Privacy Policy </a> | <a href="#">Cookie Policy </a></p>
          </div>

          <div>
            <p>Offerte</p>
            <p><a href="#">INTERNET CASA </a></p>
            <p><a href="#">LUCE E GAS </a></p>
            <p><a href="#">TELEFONIA </a></p>
          </div>

          <div>
            <p>Azienda</p>
            <p><a href="#">Chi siamo </a></p>
            <p><a href="#">Contatti </a></p>
            <p><a href="#">Termini e Condizioni </a></p>
          </div>

          <div>
            <p>Seguici su</p>
            <p><a href="#">Chi siamo </a></p>
            <p><a href="#">Contatti </a></p>
            <p><a href="#">Termini e Condizioni </a></p>
          </div>

          <div>
            <p>Iscritti alla newsletter</p>
            <p><a href="#">Chi siamo </a></p>
            <p><a href="#">Contatti </a></p>
            <p><a href="#">Termini e Condizioni </a></p>
          </div>
        </div>

        <div class="footer-blox">

          <p class="grey-font">Offertasuper.it © Copyright 2022. Tutti i diritti riservati. </p>
        </div>

      </div>
    </div>

  </footer>
</template>


<style lang="scss" scoped>
.grid-footer {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;
  grid-column-gap: 40px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>