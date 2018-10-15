<template>
  <section>

<div class="mwc ph5-ns ph4 pv4">
  <h1>Tea Dictionary</h1>
  <no-ssr>
    <auto-responsive class="center"
      v-bind="options"
    >
      <div v-for="tea in teas" :key="tea.id" :style="getStyleList(tea)" class="item">
        <h2>{{tea.title}}</h2>
        <p>{{tea.truncated_copy}}</p>
        {{tea.image}}
      </div>
    </auto-responsive>
  </no-ssr>
</div>

  </section>
</template>

<script>
export default {
  components: {

  },

  async asyncData({ app }) {
    return {
      teas: await app.$content('./teas').getAll()
    }
  },
  data() {
   return {
     loading: true,
     teas: [],
     options: {
       itemMargin: 10,
       containerWidth: 1299,
       itemClassName: 'item',
       gridWidth: 100,
       transitionDuration: '.5'
     }
   }
 },
  methods: {
    getStyleList(i) {
      return {
        width: `${i.w === 'w1' ? 100 : 250}px`,
        height: `${i.w === 'w1' ? 100 : 250}px`
      };
    }
  }
}
</script>

<style lang="scss">

</style>
