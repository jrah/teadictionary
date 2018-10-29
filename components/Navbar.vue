<template>

  <div class="absolute top-0 left-0 right-0 z-5 w-100">
    <div class="mwc ph5-ns ph4 pv3 flex items-center justify-between">
      <img src="~assets/images/logo.svg" class="w4 white" alt="Logo">

      <div class="white pointer dn-ns db z-5" @click="openNav()">
        <no-ssr>
          <v-icon name="bars" scale="2" class="db"/>
        </no-ssr>
      </div>

      <nav v-bind:class="{ navIsOpen: isOpen }" class="db-ns navbar">
        <!-- <span @click="closeNav(click)" class="pointer z-4">Close</span> -->
        <a v-for="(item, index) in site.nav" v-bind:key="`nav-${index}`" :href="item.href" :class="'white no-underline fw8 mr2 db dib-ns'">{{item.text}}</a>
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
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  &bar {
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow-x: hidden;
    transition: .5s;
  }
  &IsOpen {
    width: 100%;
  }

}

  .main {
    transition: margin-left .5s;
    padding: 1rem;
  }
</style>
