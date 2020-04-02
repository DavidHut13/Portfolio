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
                <skill-card class=""></skill-card>
            </b-col>
        </b-row>

        <!--=========================== Contact Section ======================-->
        <b-row>
            <b-col>
                <contact-section class="contactSection"></contact-section>
            </b-col>
        </b-row>
        <!--========================== Tools Icons Section/ Programming language Icons ======================-->
        <b-row class="toolsWrapper">
            <b-col cols="12" class="m-4">
                <carousel :paginationEnabled="false" :scrollPerPage="false" :autoplay="true" :perPageCustom="[[960, 8], [720, 5],[350,4]]">
                    <slide v-for="(icon,index) in iconArray" :key="index" class="text-center">
                        <div class="circle">
                            <b-img fluid class="skillLogo " :src="icon.src"></b-img>
                        </div>
                    </slide>
                </carousel>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import contactSection from '../components/contact.vue';
import skillCard from '../components/skills.vue'
import aboutSection from '../components/about'

export default {

    name: 'home',
    data() {
        return {
            IE: false,
            view: 'isDeveloper',
            iconArray: [{
                    name: "npm",
                    src: "/img/home/langIcons/npm-logo-red.svg"
                },
                {
                    name: "Git",
                    src: "/img/home/langIcons/Git-Logo-Black.png"
                },
                {
                    name: "Vue",
                    src: "/img/home/langIcons/256px-Vue.js_Logo_2.svg.png"
                },
                {
                    name: "Javascript",
                    src: "/img/home/langIcons/javascript.svg"
                },
                {
                    name: "HTML",
                    src: "/img/home/langIcons/HTML5_Badge_512.png"
                },
                {
                    name: "React",
                    src: "/img/home/langIcons/react.svg"
                },
                {
                    name: "CSS",
                    src: "/img/home/langIcons/css3-logo.png"
                },
                {
                    name: "Bootstrap Vue",
                    src: "/img/home/langIcons/icon_512.67aef2.png"
                },
                {
                    name: "Adobe Cloud",
                    src: "/img/home/langIcons/Creative_Cloud.svg"
                }
            ]
        }
    },
    components: {
        contactSection,
        skillCard,
        aboutSection,
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
}

.backgroundColor {
    background-color: rgb(240, 240, 240);
}

.aboutSection {
    margin-top: 10%;
}

.skillsSection {
    position: relative;
    margin-top: 10%;
    margin-bottom: 20%;
}

.contactSection {
    margin-bottom: 12%;
}

.backgroundStripe {
    //-webkit-box-shadow: inset 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
    //-moz-box-shadow: inset 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
    //box-shadow: inset 0px 0px 30px 1px rgba(0, 0, 0, 0.75);
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    height: 100%;
    position: absolute;
    top: 28%;
    z-index: 0;
    // background-image: url(/img/home/purpleStipe.svg);
    background-image: linear-gradient(to bottom, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
    -webkit-clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 15%, 100% 0, 100% 85%, 0 100%);
}

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
    .backgroundStripe {
        background-image: none;
    }

    .title {
        background-image: none;
        color: #9a3cf4;
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
    font-family: 'Staatliches';
}

.toolsWrapper {
    background-color: rgb(240, 240, 240);
    display: flex;
    justify-content: center;
    align-items: center;
}

.skillLogo {
    width: 3.5em;
    filter: grayscale(1) contrast(1);

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
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 80%, rgb(240, 240, 240)), url("/img/Work/workBG.jpg");
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
    margin-bottom: -4%;
    color: rgb(54, 54, 54);
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
}

.title {
    font-size: 9rem;
    font-family: 'Staatliches', cursive;
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
