<template>
<div>
    <!--======================== Home Screen =========================-->
    <b-container fluid>
        <b-row>
            <b-col class="homepage_background">
                <div class="flexCenter">
                    <h1 class="slogan text-center"><span class="p-2 ">Front-end Developer</span> | <span class="p-2 sloganBackground">Designer</span></h1>
                </div>
            </b-col>
        </b-row>

        <!--========================== About Section ====================== -->
        <b-row>
            <b-col>
                <about-section></about-section>
            </b-col>
        </b-row>

        <!--=========================== Skills Section ======================-->
        <b-row >
            <b-col class="backgroundSplash">
                <skill-card></skill-card>
            </b-col>
        </b-row>

        <!--=========================== Contact Section ======================-->
        <b-row>
            <b-col>
                <contact-section class="mb-5 mt-2"></contact-section>
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
import AOS from 'aos'
import contactSection from '../components/contact.vue';
import skillCard from '../components/skills.vue'
import aboutSection from '../components/about'

export default {
    name: 'home',
    data() {
        return {
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
                    src: "/img/Home/langIcons/HTML5_Badge_512.png"
                },
                // {
                //     name: "React",
                //     src: "/img/home/langIcons/react.svg"
                // }
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
    methods: {

    },
    mounted() {
        import('aos').then(AOS => AOS.init({
            once: false,
            delay: 300,
            mirror: true,
            anchorPlacement: 'center-bottom',

        }));
    },
    destroyed() {
        AOS.refresh();
    },
    components: {
        contactSection,
        skillCard,
        aboutSection
    }

}
</script>

<style lang="scss" scoped>
.sectionHeader {
    background-color: #5e5e5e;
    color: rgb(54, 54, 54);
    text-shadow: 2px 2px 3px rgba(145, 145, 145, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    font-size: 5em;
    font-family: 'Staatliches', cursive;
}

.angledEdge {
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    height: 800px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
}

.toolsWrapper {
    background: rgba(255, 255, 255, 0.562);
    display: flex;
    justify-content: center;
    align-items: center;
}

.skillLogo {
    width: 3.5em;
    filter: grayscale(.35);
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center
}

.skillsWrapper {
    height: 100vh;
}

.homepage_background {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    background-image: url(/img/Home/AdobeStock_275693862.jpeg);
}

.bg-color {
    background: rgb(240, 239, 239);
}

.slogan {
    height: 50vh;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    position: absolute;
    top: 45%;
    // font: bold 100px Impact, Sans-Serif;
    color: white;
    font-size: 4.25vw;
}

@media(max-width:540px) {
    .slogan {
        font-size: 6vw;
    }

}

.content {
    height: 800px;
}

.sloganBackground {
    color: rgba(5, 5, 5, 0.89);
}

// .circle {
//     height: 100px;
//     width: 100px;
//     border: none;
//     border-radius: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: white;
//     -webkit-box-shadow: 0px 0px 25px -15px rgba(0, 0, 0, 0.75);
//     -moz-box-shadow: 0px 0px 25px -15px rgba(0, 0, 0, 0.75);
//     box-shadow: 0px 0px 25px -15px rgba(0, 0, 0, 0.75);
// }

.backgroundSplash {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;

    background-image: url(/img/testing/AdobeStock_310146708_Preview.jpeg);
}

</style>
