<template>
  <div>
    <h1> All Posts </h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData: async ({ app }) => ({
    post: await app.$content('/posts').getAll()
  })
}
</script>
