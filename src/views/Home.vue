<template>
<div class="backgroundColor">
    <!--======================== Home Screen =========================-->
    <b-container class="homepage_background" fluid>
        <b-row>
            <b-col cols="12" class="flexCenter">
                <div class="titleWrapper">
                    <h4 class="subTitle">Frontend</h4>
                    <h1 class="title">Developer</h1>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <!--========================== About Section ====================== -->
    <b-container fluid>
        <b-row class="aboutSection">
            <b-col>
                <about-section></about-section>
            </b-col>
        </b-row>
        <!--=========================== Skills Section ======================-->
        <b-row class="skillsSection ">
            <b-col cols="12" class="backgroundStripe"></b-col>
            <b-col cols="12">
                <skill-card></skill-card>
            </b-col>
        </b-row>

        <!--=========================== Contact Section ======================-->
        <b-row>
            <b-col class="contactSection">
                <contact-section></contact-section>
            </b-col>
        </b-row>
        <!--========================== Tools Icons Section/ Programming language Icons ======================-->
        <stack-Tools></stack-Tools>
    </b-container>
</div>
</template>

<script>
const contactSection = () => import( /* webpackChunkName: "contactSection" */ '../components/contact.vue')
const skillCard = () => import( /* webpackChunkName: "skillcard" */ '../components/skills.vue')
const aboutSection = () => import( /* webpackChunkName: "aboutSection" */ '../components/about')
const stackTools = () => import( /* webpackChunkName: "stackTools" */ '../components/stack-tools')

export default {

    name: 'home',
    data() {
        return {
            IE: false,
            loadStack: false
        }
    },
    components: {
        contactSection,
        skillCard,
        aboutSection,
        stackTools
    },
    }
</script>

<style lang="scss" scoped>
.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.titleWrapper {
    margin-left: -15rem;
}

@media(max-width:990px) {
    .titleWrapper {
        margin-left: 0rem;
    }

    .contactSection {
        margin-bottom: 12%;
    }
}

.backgroundColor {
    background-color: rgb(240, 240, 240);
}

.aboutSection {
    margin-top: 3%;
}

.skillsSection {
    position: relative;
    margin-top: 5%;
    margin-bottom: 25%;
}

.contactSection {
    margin-bottom: 12%;
}

.backgroundStripe {
    -webkit-box-shadow: inset 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
    height: 100%;
    position: absolute;
    top: 28%;
    z-index: 0;
    background-image: linear-gradient(to bottom, #aa34f6, #a238f5, #9a3cf4);
    -webkit-clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
}

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
    .backgroundStripe {
        background-image: none;
        box-shadow:none;
    }

    .title {
        background-image: none !important;
        color: #9a3cf4 !important;
    }

}

.sectionHeader {
    background-color: #5e5e5e;
    color: rgb(54, 54, 54);
    text-shadow: 2px 2px 3px rgba(145, 145, 145, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    font-size: 5em;
    font-family: 'Staatliches', Tahoma;
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.skillsWrapper {
    height: 100vh;
}

.homepage_background {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%, rgb(240, 240, 240)), url("/img/Work/workBg.jpg");
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

.bg-color {
    background: rgb(240, 239, 239);
}

.subTitle {
    font-size: 2.2rem;
    display: block;
    margin-left: .3rem;
    margin-bottom: -4%;
    color: rgb(54, 54, 54);
    font-family: 'Open Sans', sans-serif, 'Roboto', sans-serif;
    text-transform: uppercase;
}

.title {
    font-size: 9rem;
    font-family: 'Staatliches', 'Roboto', sans-serif;
    color: transparent;
    text-transform: uppercase;
    background-image: linear-gradient(to bottom, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
}

@media(max-width:990px) {
    .title {
        font-size: 8.3rem;
    }

    .subTitle {
        font-size: 2rem;
    }

    .backgroundStripe {
        -webkit-clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
        clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
        top: 23%;
        height: 75%;
    }

    .aboutSection {
        margin-top: 10%;
    }

    .skillsSection {
        position: relative;
        margin-top: 20%;
        margin-bottom: 35%;
    }

    .contactSection {
        margin-bottom: 25%;
    }

}

@media(max-width:540px) {
    .titleWrapper {
        margin-top: -3.5rem;
    }

    .title {
        font-size: 5.3rem;
    }

    .subTitle {
        font-size: 2rem;
    }

}

.slide-enter-active {
    transition: all .85s;
}

.slide-leave-active {
    transition: all .85s;
}

.slide-enter {
    opacity: 0;
    transform: translateX(-600px);
}

.slide-enter-to {
    opacity: 1;

}

.slide-leave-to {
    opacity: 0;
    transform: translateX(600px);
}
</style>
