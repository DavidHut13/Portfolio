<template>
<div id="app">
    <navbar id="navbar" class="navWrapper"></navbar>
    <router-view />
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
    data() {
        return {

        }
    },
    components: {
        navbar: Navbar,
    },
}
</script>

<style lang="scss">

</style>
