<template>
<!-- <b-navbar id="navbar" toggleable="lg" type="none" variant="none" fixed="top">
    <b-navbar-brand>
        <router-link to="/">
            <img class="navbar-logo" src="/img/VividDigitalLogoColor.png" fluid>
        </router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
            <router-link id="navLink" tag="b-nav-item" class="nav-btn-black" to="/work">work</router-link>
             <router-link id="navLink" tag="b-nav-item" class="nav-btn-black" to="/work">contact</router-link>
        </b-navbar-nav>
    </b-collapse>
</b-navbar> -->
<b-container fluid>
    <b-row>
        <b-col cols="1">
            <div @click="toggleNav" target="nav-collapse" class="hamburgerButton">
                <div class="mt-1 bar1"></div>
                <div class="mt-1 bar2"></div>
                <div class="mt-1 bar3"></div>
            </div>
        </b-col>
        <b-col offset="8">
            <b-nav id="navbarWrapper" vertical class="navbarWrapper">
                <b-nav-item class="topNavItem" active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
            </b-nav>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            windowTop: window.top.scrollYm,
            navOpen: false
        }
    },
    created() {

        //Look into this. helps with performance
        // this.handleDebouncedScroll = debounce(this.handleScroll, 100);
        // window.addEventListener('scroll', this.navBarTransition)
    },
    methods: {
        toggleNav() {
            this.navOpen = !this.navOpen

            if (this.navOpen) {
                document.getElementById("navbarWrapper").style.width = "0px";
            }
            if (!this.navOpen) {
                document.getElementById("navbarWrapper").style.width = "250px";
            }

        }
        // navBarTransition(event) {
        //     if ($(window).scrollTop() > 300) {
        //         $(navbar).addClass("navbar-background");
        //         // $(navLink).addClass("nav-btn-black");
        //         // $(navLink).removeClass("nav-btn-white");
        //     } else {
        //         $(navbar).removeClass("navbar-background");
        //         // $(navLink).removeClass("nav-btn-black");
        //         // $(navLink).addClass("nav-btn-white")
        //     }
    }

}
</script>

<style lang="scss">
.topNavItem {
    margin-top: 100px;
}

.bar1,
.bar2,
.bar3 {
    display: block;
    font-size: 10px;
    padding: 0;
    width: 40px;
    height: 6px;
    border-radius: 7px;
    background-color: black;
}

.hamburgerButton {
    display: block;
    position: fixed;
    height: 40px;
    right: 3%;
    top: 4%;
    width: 40px;
    z-index: 2;
}

.navbarWrapper {
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    transition: .5s;
    background: grey;
}

a.nav-link {
    font-family: 'Staatliches', cursive;
    font-size: 2.75em;
}

.navbar-background {
    background: white;
    -webkit-box-shadow: 0px 10px 18px -19px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 10px 18px -19px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 10px 18px -19px rgba(0, 0, 0, 0.75);
}

.navbar-logo {
    width: 160px;
}

.make-bg-transparent {
    position: fixed !important;
}

.nav-btn-white>a.nav-link {
    color: black;
}

.nav-btn-black>a.nav-link {
    color: black;
}

.nav-btn-black>a.nav-link:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}

a:hover:after {
    width: 100%;
    left: 0;
}

@media screen and (max-height: 300px) {
    ul {
        margin-top: 40px;
    }
}
</style>
