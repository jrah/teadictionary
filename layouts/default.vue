<template>
  <div>
    <div>Nav</div>
    <nuxt/>
  </div>
</template>

<style lang="scss" scoped>
@import "./node_modules/tachyons-sass/scss/variables";

$mqs: (
  sm: 35.5em,
  md: 48em,
  lg: 64em,
) !default;

@mixin mq($mq) {
  @if $mq == ns {

    @media screen and (min-width: #{map-get($mqs, sm)}) {
      @content;
    }

  } @if $mq == m {

      @media screen and (min-width: #{map-get($mqs, sm)}) and (max-width: #{map-get($mqs, lg)}) {
        @content;
      }

    } @if $mq == l {

      @media screen and (min-width: #{map-get($mqs, lg)}) {
        @content;
      }

    }
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


</style>
