<template>
  <main>
    <app-navbar/>
    <nuxt/>
    <app-footer/>
  </main>
</template>


<script>
import site from '~/content/site.json'
import appNavbar from '~/components/Navbar.vue'
import appFooter from '~/components/Footer.vue'

export default {
  components: {
    appFooter,
    appNavbar
  }
}
</script>



<style lang="scss">

@import "assets/scss/variables";
@import "assets/scss/mixins";

body {
  font-family: 'Raleway', $sans-serif;
}
.mwc {
  margin-left: auto;
  margin-right: auto;
  max-width:  100%;
}


@each $size, $width in $mqs {

  .mwc {

    @if $size == ns {

      @media screen and (min-width: #{map-get($mqs, ns)}) {
        margin-left: auto;
        margin-right: auto;
        max-width:  55em;
      }

    } @if $size == lg {

      @media screen and (min-width: #{map-get($mqs, lg)}) {
        margin-left: auto;
        margin-right: auto;
        max-width:  72em;
      }

    } @if $size == m {

      @media screen and (min-width: #{map-get($mqs, ns)}) and (max-width: #{map-get($mqs, lg)}) {
        margin-left: auto;
        margin-right: auto;
        max-width:  65em;
      }

    }

  }

}


html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}


.skew--from-right {
  bottom: -100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    transform: skew(70deg);
    transition: none;
    z-index: 8;
}

.skew {
  &--from-right {
    bottom: -100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
      transform: skew(80deg);
      transition: none;
  }
  &--from-left {
    bottom: -100%;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
      transform: skew(-80deg);
      transition: none;
  }
}

.input-focus {
  &:focus {
    border-color: currentColor;
  }
}

</style>
