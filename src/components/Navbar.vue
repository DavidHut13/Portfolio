<template>
<b-navbar id="navbar" toggleable="md" type="none" variant="none" fixed="top">
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
</b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            windowTop: window.top.scrollY
        }
    },
    created() {

        //Look into this. helps with performance
        // this.handleDebouncedScroll = debounce(this.handleScroll, 100);
        window.addEventListener('scroll', this.navBarTransition)
    },
    methods: {
        navBarTransition(event) {
            if ($(window).scrollTop() > 300) {
                $(navbar).addClass("navbar-background");
                // $(navLink).addClass("nav-btn-black");
                // $(navLink).removeClass("nav-btn-white");
            } else {
                $(navbar).removeClass("navbar-background");
                // $(navLink).removeClass("nav-btn-black");
                // $(navLink).addClass("nav-btn-white")
            }
        }
    }

}
</script>

<style lang="scss">
a.nav-link {
    font-family: 'Staatliches', cursive;
    font-size: 2.75em;
}

.navbar-background {
    background: rgba(255, 255, 255, 0.815);
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
    color: white;
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
