<template lang="html">
  <h1>{{ page.title }}</h1>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    return {
      page: await app.$content('/').get(route.path)
    }
  }
}
</script>

<style lang="css">

</style>
