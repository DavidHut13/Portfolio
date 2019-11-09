<template>
<div id="app">
    <navbar id="navbar" class="navWrapper"></navbar>
    <router-view />
    <app-footer></app-footer>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import appFooter from './components/footer.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        navbar: Navbar,
        appFooter: appFooter
    },
}
</script>

<style lang="scss">

</style>
