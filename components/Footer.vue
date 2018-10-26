<template>
  <footer>
  <div class="mwc ph5-ns ph4 pv4 flex justify-between items-center">
      <small class="db fw8">© 2018 {{site.title_global}} </small>
      <ul class="pa0 ma0 list flex justify-between">
        <li v-for="(icon, index) in icons" :key="index" :name=" '' + index " class="dib mh2">
          <a v-bind:href="icon.href" class="near-black">
            <no-ssr>
              <v-icon v-bind:name="'brands/' + icon.type" scale="2" />
            </no-ssr>
          </a>
        </li>
      </ul>
  </div>
</footer>
</template>

<script>
import site from '~/content/site.json'

export default {
  data() {
    return {
      site: site,
      icons: site.social

    }
  }
}
</script>

<style lang="scss">
</style>
