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
        <b-row class="mt-5 aboutPageWrapper">
            <b-col cols="11" class="aboutHeader">
                <h1 class="sectionHeader ml-4">about</h1>
            </b-col>
            <b-col cols="12" md="8" offset-md="2" lg="5" offset-lg="1" class="aboutWrapper mt-3">
                <div>
                    <h1 class="aboutName">David Hutto</h1>
                    <h3 class="aboutTitle"> Web Developer & Designer</h3>
                    <p class="aboutPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </b-col>
            <b-col cols="12" lg="6" class="aboutPic mt-5">
                <b-img class="profileImg" src="/img/home/Hutto_David_DFW_Web Maintenance_500.jpg" fluid></b-img>
            </b-col>
        </b-row>
        <!--=========================== Skills Section ======================-->
        <b-row class="mb-5">
            <b-col cols="11">
                <h1 class="sectionHeader skillsHeader ml-4 mb-5">Skills</h1>
            </b-col>
            <b-col>
                <skill-card></skill-card>
            </b-col>
        </b-row>
        <!--=========================== Contact Section ======================-->
        <b-row class="mb-5">
            <b-col cols="12">
                <h1 class="sectionHeader skillsHeader ml-4 my-5">Contact</h1>
            </b-col>
            <b-col>
                <contact-section class="mb-5 mt-2"></contact-section>
            </b-col>
        </b-row>
        <!--========================== Tools Icons Section/ Programming language Icons ======================-->
        <b-row class="toolsWrapper">
            <b-col cols="12" class="m-4">
                <carousel :paginationEnabled="false" :scrollPerPage="false" :autoplay="true" :perPageCustom="[[960, 8], [720, 5],[350,4]]">
                    <slide v-for="icon in iconArray" :key="icon" class="text-center">
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

export default {
    name: 'home',
    data() {
        return {
            iconArray: [{
                    name: "npm",
                    src: "/img/home/langIcons/npm-logo-red.svg"
                }, {
                    name: "Git",
                    src: "/img/home/langIcons/Git-Logo-Black.png"
                }, {
                    name: "Vue",
                    src: "/img/home/langIcons/256px-Vue.js_Logo_2.svg.png"
                }, {
                    name: "Javascript",
                    src: "/img/home/langIcons/javascript.svg"
                }, {
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
                }, {
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
    components: {
        contactSection,
        skillCard,
    }

}
</script>

<style lang="scss" scoped>
.angledEdge {
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    height: 400px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
}

@media (max-width:992px) {
    .aboutWrapper {
        order: 2;
    }

    .aboutPic {
        order: 1;
    }
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

.aboutWrapper,
.aboutPic {
    display: flex;
    justify-content: center;
    align-items: center
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center
}

.aboutName {
    color: #292F36;
    font-weight: bold;
}

.profileImg {
    border-radius: 300px;
    max-height: 450px;
}

.sectionHeader {
    color: #292F36;
    font-size: 5em;
    font-family: 'Staatliches', cursive;
}

.skillsWrapper {
    height: 100vh;
}

.aboutPageWrapper {
    margin-top: 140px !important;
}

.homepage_background {
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // font: bold 100px Impact, Sans-Serif;
    color: white;
    font-size: 3.5em;
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

.skillsHeader {
    margin-top: 2em;
}
</style>
