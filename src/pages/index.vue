<template>
  <div class="home">
      <Welcome message="VueJS3 starter, your best VueJS starter !"/>
      <Nav />
  </div>
</template>

<script>
import Welcome from '../components/Welcome.vue'
import Nav from '../components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Nav,
  },
}
</script>

<style lang="scss">
.home {
  color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>