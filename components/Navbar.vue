<template>

  <div class="absolute top-0 left-0 right-0 z-5 w-100">
    <div class="mwc ph5-ns ph4 pv3 flex items-center justify-between">
      <img src="~assets/images/logo.svg" class="w4 white" alt="Logo">

      <div class="white pointer dn-ns db z-5 navMenu-toggle" @click="openNav()">
        <no-ssr>
          <v-icon name="bars" scale="2" class="db"/>
        </no-ssr>
      </div>

      <nav v-bind:class="{ isOpen: isOpen }" class="navMenu--top">
        <!-- <span @click="closeNav(click)" class="pointer z-4">Close</span> -->
        <a v-for="(item, index) in site.nav" v-bind:key="`nav-${index}`" :href="item.href" :class="'navMenu--top-item dib-ns db no-underline fw8 mr2-ns v-mid'">
          <div class="dn-ns dib v-mid">
            <no-ssr>
              <v-icon name="home" scale="1.5"/>
            </no-ssr>
          </div>
          <span class="dib">{{item.text}}</span>
        </a>
      </nav>

    </div>
  </div>

</template>

<script>
import site from '~/content/site.json'
export default {
  data () {
    return {
      site,
      isOpen: false
    }
  },
  methods: {
    closeNav() {

    },
    openNav() {
      this.isOpen = !this.isOpen;
      let siteCanvas = document.querySelector('#__nuxt');
      siteCanvas.classList.toggle('is-offcanvas');
    }
  }
}
</script>

<style lang="scss">

@import "assets/scss/variables";
@import "assets/scss/mixins";


// not scoped due to site-canvas on main
.site-canvas {
  transition: 300ms ease transform;
  background-color: $white;
}
.is-offcanvas {
  overflow: hidden;
  background-color: $white;
  .site-canvas {
    transform: translateX(-60%);
  }
}
.navMenu {
  &--top {
    @include mq(ns) {
      // resets nav position on larger screen width devices
      position: relative;
      top: auto;
      right: auto;
      width: auto;
      box-shadow: 0;
    }
    width: 60%;
    height: 100%;
    position: absolute;
    top: .5em;
    right: -60%;

    &-item {
      @include mq(ns) {
        font-size: 1em;
        display: inline-block;
        padding: 0;
        border: 0;
        color: $white;
        margin: 0 .5rem;
        &:hover {
          color: $near-white;
        }
      }
      color: $navy;
      padding: 1rem 0;
      margin: 0 1rem;
      border-bottom: 1px solid $near-white;
      font-size: 1.25em;
      &:hover {
        color: $red;
      }
    }
  }

  &-toggle {
    @include mq(ns) {
      display: none;
    }
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }
}



</style>
