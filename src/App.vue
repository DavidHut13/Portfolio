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
import AOS from 'aos'
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
    mounted() {
        import('aos').then(AOS => AOS.init({
            once: true,
            delay: 300,
            mirror: true,
            anchorPlacement: 'center-bottom',

        }));
    },
    destroyed() {
        AOS.refresh();
    },
}
</script>

<style lang="scss">
html {
    scroll-behavior: smooth;
}
</style>
