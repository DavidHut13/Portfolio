<template>
<b-container fluid>
    <b-row>
        <b-col class="p-0">
            <div>
                <div @click="toggleNav" target="nav-collapse" class="hamburgerButton">
                    <div id="bar" :class="{active: navOpen }" class="mt-1 bar1"></div>
                    <div id="bar" :class="{active: navOpen }" class="mt-1 bar2"></div>
                    <div id="bar" :class="{active: navOpen }" class="mt-1 bar3"></div>
                </div>
                <router-link class="logoWrapper" to="/">
                    <img v-if="blackLogo" class="navbar-logo" src="\img\Logos\Logo.svg" fluid>
                    <img v-if="!blackLogo" class="navbar-logo" src="\img\Logos\Logo-white.svg" fluid>
                </router-link>
                <b-nav id="navbarWrapper" vertical class="navbarWrapper">
                    <div class="linkWrapper">
                        <router-link id="navLink" tag="b-nav-item" class="topNavItem" to="/"><span @click="toggleNav">Home</span></router-link>
                        <router-link id="navLink" tag="b-nav-item" to="/work"><span @click="toggleNav">Work</span></router-link>
                        <i class="socialIcon fab fa-facebook-square mr-2"></i>
                        <i class="socialIcon fab fa-linkedin mx-2"></i>
                        <i class="socialIcon fab fa-github-square mx-2"></i>
                        <i class="socialIcon fab fa-codepen mx-2"></i>
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
            blackLogo: true
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
                document.getElementById("navbarWrapper").style.visibility = "hidden";
                this.blackLogo = true;
            }
            if (this.navOpen) {
                document.getElementById("navbarWrapper").style.opacity = "1";
                document.getElementById("navbarWrapper").style.visibility = "visible";

                this.blackLogo = false;

            }
        },
        monitorScroll(event) {
            if ($(window).scrollTop() > 52) {
                $(navbar).addClass("navBackground");
            }
            if ($(window).scrollTop() <= 52) {
                $(navbar).removeClass("navBackground");
            }
        },
    },

}
</script>

<style lang="scss">
.navBackground {
    z-index: 5;
    position: fixed;
    height: 70px;
    background: white;
    -webkit-box-shadow: 0px 0px 25px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 25px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 25px -9px rgba(0, 0, 0, 0.75);
    transition: .2s ease-in;
}

.logoWrapper {
    position: fixed;
    top: 2%;
    left: 2%;
    z-index: 2;
    text-decoration: none;
}

.logoWrapper:hover {
    text-decoration: none;
}

.linkWrapper {
    margin-right: 5vw;
}

@media (max-width:600px) {
    .linkWrapper {
        margin-right: 5vh;
    }
}

.bar1.active {
    top: 10px;
    background-color: white;
    transform: rotate(-135deg);
    transition: all .5s ease-in;
    -webkit-transform: rotate(-135deg);
    -webkit-transition: all .5s ease-in;
}

.bar2.active {
    left: 0px;
    background-color: transparent;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
}

.bar3.active {
    top: 10px;
    background-color: white;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -webkit-transition: all .5s ease-in;
    transition: all .5s ease-in;
}

.topNavItem {
    margin-top: 100px;
}

.bar1,
.bar2,
.bar3 {
    position: absolute;
    cursor: pointer;
    display: block;
    font-size: 10px;
    padding: 0;
    width: 40px;
    height: 4px;
    border-radius: 3px;
    -webkit-appearance: none;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
     background:black;
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
    top: 2%;
    width: 40px;
    z-index: 2;
}

.navbarWrapper {
    position: fixed;
    display: flex;
    align-items: flex-end;
    z-index: 1;
    opacity: 0;
    width: 100%;
    height: 100vh;
    transition: .5s;
    background: rgb(20, 20, 20);
    overflow: inherit;
    visibility: hidden;
}

a.nav-link {
    font-family: 'Staatliches', cursive;
    font-size: 5em;
    color: white;
    padding: 0;
    display: inline-block;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

a.nav-link:visited,
a.nav-link:link,
.socialIcon {
    display: inline-block;
    font-weight: 300;
    margin: 1rem;
    color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(110deg, white 0%, white 50%, #BA28F7 0%, #9A3CF4 100%);
    -webkit-background-clip: text;
    background-clip: text;
    transition: all .4s;
    backface-visibility: hidden;
}

a.nav-link:visited,
a.nav-link:link {
    font-size: 4rem;
    background-size: 220%;
}

.socialIcon {
    font-size: 2rem;
    background-size: 260%;
}

a.nav-link:active,
a.nav-link:hover,
.socialIcon:active,
.socialIcon:hover {
    transform: scale(1.1);
    background-position: 100%;
    color: transparent;
}

.socialIcon {
    color: white;
}

.navbar-logo {
    width: 50px;
}
</style>
