<template>
  <div>
    <h1> All Posts </h1>
    <ul>
      <li v-for="tea in teas" :key="tea.id">
        {{ tea.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    return {
      posts: await app.$content('/').getAll()
    }
  }
}
</script>
