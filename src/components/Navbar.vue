<template>
<b-navbar toggleable="md" type="none" variant="none"  fixed="top">
    <b-navbar-brand href="#"><b-img class="navbar-logo" src="\img\logo.png" fluid></b-img></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <router-link id="nav-link" tag="b-nav-item" class="nav-btn-black" to="/about">about</router-link>
            <router-link id="nav-link" tag="b-nav-item" class="nav-btn-black" to="/">work</router-link>
        </b-navbar-nav>
    </b-collapse>
</b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }

}
</script>

<style>
.navbar-logo {
    width: 130px;
}

.make-bg-transparent {
    position: fixed !important;
}

 .nav-btn-white > a.nav-link{
    color: white;
}
 .nav-btn-black > a.nav-link{
    color: black;
}

</style>
