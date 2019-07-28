<template>
  <div id="app">
    <navbar class="navbar"></navbar>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>



</style>
