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
                    <!-- <img class="navbar-logo" src="/img/Logos/VividDigitalLogoColor.png" fluid> -->
                    <!-- <img  class="navbar-logo" src="/img/fullNameSignature.png" fluid> -->
                    <h5 id="signature" class="signature">david hutto.</h5>
                </router-link>
                <b-nav id="navbarWrapper" vertical class="navbarWrapper">
                    <div class="linkWrapper">
                        <router-link id="navLink" tag="b-nav-item" class="topNavItem" to="/"><span @click="toggleNav">Home</span></router-link>
                        <router-link id="navLink" tag="b-nav-item" to="/work"><span @click="toggleNav">Work</span></router-link>
                        <i class="socialIcon fab fa-facebook-square fa-3x mr-2"></i>
                        <i class="socialIcon fab fa-linkedin fa-3x mx-2"></i>
                        <i class="socialIcon fab fa-github-square fa-3x mx-2"></i>
                        <i class="socialIcon fab fa-codepen fa-3x mx-2"></i>
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
                document.getElementById("navbarWrapper").style.visibility = "hidden";
                // document.getElementById("signature").style.color = "black"
                 $(signature).removeClass('colorWhite')
                // $('body').css('overflow', 'auto')
            }
            if (this.navOpen) {
                document.getElementById("navbarWrapper").style.opacity = "1";
                document.getElementById("navbarWrapper").style.visibility = "visible";
                // document.getElementById("signature").style.color = "white"
               
                $(signature).addClass('colorWhite')
                // $('body').css('overflow', 'hidden')
            }
        },
        monitorScroll(event) {
            if ($(window).scrollTop() > 150) {
                $(navbar).addClass("navBackground");
            }
            if ($(window).scrollTop() <= 150) {
                $(navbar).removeClass("navBackground");
            }
        },
    },

}
</script>

<style lang="scss">
.signature {
    font-family: 'Work Sans', sans-serif;
    font-size: 1.75em;
    color: rgb(36, 36, 36);
    text-decoration: none;
}
.colorWhite{
    color:white;
}
.navBackground {
    z-index: 5;
    position: fixed;
    height: 70px;
    background: white;
    -webkit-box-shadow: 0px 0px 25px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 25px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 25px -9px rgba(0, 0, 0, 0.75);
}

.logoWrapper {
    position: fixed;
    top: 20px;
    left: 2%;
    z-index: 2;
    text-decoration: none;
}

.logoWrapper:hover {
    text-decoration: none;
}

.linkWrapper {
    margin-right:35vh;
}
@media (max-width:600px){
    .linkWrapper {
    margin-right:5vh;
}
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
    height: 4px;
    border-radius: 8px;
    -webkit-appearance: none;
    -webkit-transition: all 0.2s ease-in;
    -webkit-transform: rotate(0deg);
    background-color: black;
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
    background: #111517;
    overflow: inherit;
    visibility: hidden;
}

a.nav-link {
    font-family: 'Staatliches', cursive;
    font-size: 5em;
    color: white;
    padding: 0;
    display: inline-block;
}

a.nav-link:hover,
.socialIcon:hover, .signature:hover {
    color:#4facfe;
}

.socialIcon {
    color: white;
}

.navbar-logo {
    width: 160px;
}
</style>
