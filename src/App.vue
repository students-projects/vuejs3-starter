<script>
  export default {
    setup() {
      return {};
    },
  };
</script>
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">concerts</router-link>
  </div>
  <router-view/>
</template>