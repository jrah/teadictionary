<template>
  <piecePaper>
    <section class="hero is-bold is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            {{tea.title}}
          </h1>
        </div>
      </div>
    </section>
      <div class="columns">
        <div class="column auto">
        </div>
        <div class="column is-three-fifths content">
        <div v-html="tea.body" />
        </div>
        <div class="column auto">
        </div>
      </div>
  </piecePaper>
</template>

<script>

export default {
  scrollToTop: true,
  components: {

  },
    async asyncData({ app, route }) {
    return {
      tea: await app.$content("/teas").get(route.path)
    }
  }
}
</script>
<style>
.content {
  font-size: 1.25rem;
  line-height: 2rem;
}
.content a {
  color: #ac3b61;
  text-decoration: underline;
}
</style>
