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

    </b-container>
    <b-container>

        <!--========================== About Section ====================== -->
        <b-row class="mt-5 aboutPageWrapper">
            <b-col cols="12" class="aboutHeader">
                <h1 class="sectionHeader">about</h1>
            </b-col>
            <b-col cols="12" lg="6" class="aboutWrapper mt-5">
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
            <b-col cols="12">
                <h1 class="sectionHeader skillsHeader mb-5">Skills</h1>
            </b-col>
            <b-col class="flexCenter" cols="4">
                <div>
                    <h3>Frontend Development</h3>
                    <p class="aboutPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <b-badge pill class="skillPill mx-1 px-2" >Vue.js</b-badge>
                    <b-badge pill class="skillPill mx-1 px-2" >React</b-badge>
                    <b-badge pill class="skillPill mx-1 px-2" >Bootstrap</b-badge>
                    <b-badge pill class="skillPill mx-1 px-2" >git</b-badge>
                </div>
            </b-col>
            <b-col>
                <b-img class="profileImg" src="/img/testing/view-of-airport-247791.jpg" fluid></b-img>
            </b-col>
            <skill-card></skill-card>
        </b-row>
        <!--=========================== Contact Section ======================-->
        <b-row class="mb-5">
            <b-col cols="12">
                <h1 class="sectionHeader skillsHeader mb-5">Contact</h1>
            </b-col>
            <b-col>
                <contact-section class="mb-5 mt-2"></contact-section>
            </b-col>
        </b-row>
    </b-container>
    <!--========================== Tools Icons Section/ Programming language Icons ======================-->
    <b-container fluid>
        <b-row class="toolsWrapper flexCenter mb-1">
            <b-col class="ml-5">
                <div class="circle">
                    <b-img class="skillLogo" src="/img/home/langIcons/npm-logo-red.svg"></b-img>
                </div>
            </b-col>
            <b-col>
                <div class="circle">
                    <b-img class="skillLogo" src="/img/home/langIcons/Git-Logo-Black.png"></b-img>
                </div>
            </b-col>
            <b-col>
                <div class="circle">
                    <b-img class="skillLogo" src="/img/home/langIcons/256px-Vue.js_Logo_2.svg.png"></b-img>
                </div>
            </b-col>
            <b-col>
                <div class="circle">
                    <b-img class="skillLogo" src="/img/home/langIcons/javascript.svg"></b-img>
                </div>
            </b-col>
            <b-col class="my-3">
                <b-img class="skillLogo" src="/img/Home/langIcons/HTML5_Badge_512.png"></b-img>
            </b-col>
            <b-col>
                <div class="circle">
                    <b-img class="skillLogo" src="/img/home/langIcons/react.svg"></b-img>
                </div>
            </b-col>
            <b-col>
                <div class="circle">
                    <b-img class="skillLogo" src="/img/home/langIcons/css3-logo.png"></b-img>
                </div>
            </b-col>
            <b-col>
                <div class="circle">
                    <b-img class="skillLogo" src="/img/home/langIcons/icon_512.67aef2.png"></b-img>
                </div>
            </b-col>
            <b-col>
                <div class="circle">
                    <b-img class="skillLogo" src="/img/home/langIcons/Creative_Cloud.svg"></b-img>
                </div>
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

        }
    },
    methods: {

    },
    mounted() {
        this.skillsProgress()
    },
    components: {
        contactSection,
        skillCard,
    }

}
</script>

<style lang="scss" scoped>
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
    height: 130px;
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
//     margin: auto;
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
</style>
