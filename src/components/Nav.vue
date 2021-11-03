<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Nav',
}
</script>

<style>
a, a:visited, a:hover {
  color: white;
}

a {
  margin: 0 15px;
}

.nav {
  margin-top: 50px;
  font-size: 25px;
}
</style>