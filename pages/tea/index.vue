<template>
  <section>
    <tea-hero/>
    <div class="columns is-centered is-multiline">
      <div class="column is-three-fifths">
        <div class="tealinks" v-for='tea in teas' :key='tea'>
        <nuxt-link :to="tea.permalink">
          <h2 class="title">{{ tea.title }}</h2>
        </nuxt-link>
        <br>
        </div>
        <br>
      </div>
    </div>
  </section>
</template>


<script>

export default {
  layout: 'defaultLayout',
  scrollToTop: true,
  components: {
  },
  async asyncData ({ app }) {
    return {
      teas: await app.$content('/teas').getAll()
    }
  }
}
</script>
<style scoped>
.pages {
 margin-bottom: 8vh;
}
h1 {
  color: #413e3c;
  background-image: linear-gradient(90deg, #ac3b61, #336ca4, #6c0729);
  background-size: 100% .5rem;
  background-position: 0 88%;
  background-repeat: no-repeat;
}
.column {
  min-height: 100px;
}
h2 {
  color: #413e3c;
  background-image: linear-gradient(90deg, #ac3b61, #336ca4, #0d4276, #6c0729);
  background-size: 100% .2rem;
  background-position: 0 88%;
  background-repeat: no-repeat;
}
</style>
