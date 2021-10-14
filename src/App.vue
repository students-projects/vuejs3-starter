<script>
  export default {
    setup() {
      return {};
    },
  };
</script>
<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style scoped>
#nav, a, a:visited {
  color: white;
  display: flex;
  justify-content: center;
  font-size: 25px;
}
</style>