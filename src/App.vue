<template>
<div id="app">
    <app-navbar id="navbar" class="navWrapper"></app-navbar>
    <router-view />
    <app-footer></app-footer>
</div>
</template>

<script>
import appNavbar from './components/Navbar.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import appFooter from './components/footer.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        appNavbar: appNavbar,
        appFooter: appFooter
    },
    methods: {
    
    }
}
</script>

<style lang="scss">

</style>
