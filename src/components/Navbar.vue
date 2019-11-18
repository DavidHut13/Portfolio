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
        <b-col class="p-0">
            <div id="navbar">
                <div @click="toggleNav" target="nav-collapse" class="hamburgerButton">
                    <div id="bar" :class="{active: navOpen }" class="mt-1 bar1"></div>
                    <div id="bar" :class="{active: navOpen }" class="mt-1 bar2"></div>
                    <div id="bar" :class="{active: navOpen }" class="mt-1 bar3"></div>
                </div>
                <router-link class="logoWrapper" to="/">
                    <!-- <img  class="navbar-logo" src="/img/logoWhite.png" fluid> -->
                    <!-- <img  class="navbar-logo" src="/img/signatureWhite.png" fluid> -->
                    <h5 class="signature">David Hutto</h5>
                </router-link>
                <b-nav id="navbarWrapper" vertical class="navbarWrapper">
                    <div class="linkWrapper">
                        <router-link id="navLink" tag="b-nav-item" class="topNavItem" to="/work">work</router-link>
                        <router-link id="navLink" tag="b-nav-item" class="mb-5" to="/work">contact</router-link>
                        <i class="socialIcon fab fa-facebook-square fa-3x ml-4 mx-2"></i>
                        <i class="socialIcon fab fa-linkedin fa-3x mx-2"></i>
                        <i class="socialIcon fab fa-github-square fa-3x mx-2"></i>
                    </div>
                </b-nav>
            </div>
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
            navOpen: false,
            whiteLogo: false
        }
    },
    created() {
        window.addEventListener('scroll', this.monitorScroll)
    },
    methods: {
        toggleNav() {
            this.navOpen = !this.navOpen
            if (!this.navOpen) {
                document.getElementById("navbarWrapper").style.opacity = "0";
                $('body').css('overflow', 'auto')
            }
            if (this.navOpen) {
                document.getElementById("navbarWrapper").style.opacity = "1";
                $('body').css('overflow', 'hidden')
            }
        },
        monitorScroll(event) {
            if ($(window).scrollTop() > 980) {
                $(navbar).addClass("navBackground");
            }
            if ($(window).scrollTop() <= 980) {
                $(navbar).removeClass("navBackground");
            }
        }
    }
}
</script>

<style lang="scss">
.signature {
    font-family: 'Mrs Sheppards', cursive;
    font-size: 3em;
    color: #90E876;
    text-decoration: none;
}


.navBackground {
    z-index: 5;
    position: fixed;
    height: 10vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.589);
}

.logoWrapper {
    position: fixed;
    top: 25px;
    left: 2%;
    z-index: 2;
    text-decoration: none;
}
.logoWrapper:hover {
    text-decoration: none;
}

.linkWrapper {
    width: 35vw;
}

.bar1.active {
    top: 10px;
    background-color: white;
    -webkit-transform: rotate(-135deg);
    -webkit-transition: all .5s ease-in;
}

.bar2.active {
    left: 0px;
    background-color: transparent;
    -webkit-transition: all 0.2s ease-in;

}

.bar3.active {
    top: 10px;
    background-color: white;
    -webkit-transform: rotate(135deg);
    -webkit-transition: all .5s ease-in;
}

.topNavItem {
    margin-top: 100px;
}

.bar1,
.bar2,
.bar3 {
    position: absolute;
    display: block;
    font-size: 10px;
    padding: 0;
    width: 40px;
    height: 3px;
    border-radius: 7px;
    -webkit-appearance: none;
    -webkit-transition: all 0.2s ease-in;
    -webkit-transform: rotate(0deg);
    background-color: rgb(255, 255, 255);
}

.bar2 {
    top: 10px;
}

.bar3 {
    top: 20px;
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
    display: flex;
    align-items: flex-end;
    z-index: 1;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    transition: .5s;
    background: #111517;
}

a.nav-link {
    font-family: 'Staatliches', cursive;
    font-size: 5em;
    color: white;
}

a.nav-link:hover,
.socialIcon:hover {
    color: red;
}

.socialIcon {
    color: white;
}

.navbar-logo {
    width: 160px;
}
</style>
