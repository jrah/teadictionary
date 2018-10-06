<template lang="html">
  <h1>{{tea.title}}</h1>
</template>

<script>
export default {
  async asyncData ({ app, route }) {
  return {
    tea: await app.$content('/').get(route.path)
  }
}
}
</script>

<style lang="css">
</style>
