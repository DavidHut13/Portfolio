<template>
<div id="app">
    <app-navbar id="navbar" class="navWrapper"></app-navbar>
    <router-view />
    <app-footer></app-footer>
    <scroll-to-top></scroll-to-top>
</div>
</template>

<script>
import appNavbar from './components/Navbar.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import appFooter from './components/footer.vue';
import ScrollToTop from './components//ScrollToTop';
export default {
    data() {
        return {

        }
    },
    components: {
        appNavbar: appNavbar,
        appFooter: appFooter,
        ScrollToTop
    },
    methods: {
    
    }
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>
