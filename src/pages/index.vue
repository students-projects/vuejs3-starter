<template>
  <div class="home">
      <Welcome message="VueJS3 starterr, your best VueJS starter !"/>
  </div>
</template>

<script>
import Welcome from '../components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
  },
}
</script>

<style>
.home {
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>