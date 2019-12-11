<template>
    <b-container class="bg-color" fluid>
        <b-row>
            <b-col class="homepage_background">
                <div class="flexCenter">
                    <h1 class="slogan text-center">Be Bold.</h1>
                </div>
            </b-col>
        </b-row>
         <b-row class="mt-5 aboutPageWrapper d-flex justify-content-center align-items-center">
             <b-col cols="10" offset="1" class="aboutHeader">
                <h1 class="sectionHeader aboutWrapper">about</h1>
            </b-col>
            <b-col cols="4" offset="2">
                <div>
                    <h1>David Hutto</h1>
                    <h3> Web Developer & Designer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </b-col>
            <b-col class="flexCenter">
                <b-img class="rounded profileImg" src="/img/Home/Hutto_David_DFW_Web Maintenance_500.jpg"></b-img>
            </b-col>
        </b-row>
        <b-row class="pb-5">
            <b-col cols="10" offset="1">
                <h1 class="sectionHeader skillsHeader">Skills</h1>
            </b-col>
            <b-col cols="10" offset="1">
                <h4>Front end Development</h4>
            </b-col>
            <b-col cols="10" offset="1">
                <h4>Graphic Design</h4>
            </b-col>
             <b-col cols="10" offset="1">
                 <h4>Marketing</h4>
            </b-col>
             <b-col cols="5" offset="1" class="d-flex justify-content-center align-items-center">
                <h3 class="skillsHeader">Video and 3d Software</h3>
            </b-col>
            <b-col cols="5">
                <b-img src="/img/Home/BlenderScreenShot.jpg"></b-img>
            </b-col>



            <!-- Tools Icons Section/ Programming language Icons -->
            <b-col cols="10" offset="1">
                <h1 class="sectionHeader toolsHeader">Tools</h1>
            </b-col>
            <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/Home/langIcons/npm-logo-red.svg"></b-img>
            </b-col>
            <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/Home/langIcons/Git-Logo-White.png"></b-img>
            </b-col>
            <b-col class="my-3"  cols="2" offset="1">
                <b-img class="skillLogo" src="/img/Home/langIcons/256px-Vue.js_Logo_2.svg.png"></b-img>
            </b-col>
            <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/Home/langIcons/javascript.svg"></b-img>
            </b-col>
            <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/Home/langIcons/react.svg"></b-img>
            </b-col>
             <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/Home/langIcons/HTML5_Badge_512.png"></b-img>
            </b-col>
             <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/Home/langIcons/css3-logo.png"></b-img>
            </b-col>
            <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/Home/langIcons/icon_512.67aef2.png"></b-img>
            </b-col>
             <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/Home/langIcons/Creative_Cloud.svg"></b-img>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'home',

}
</script>

<style scoped>

.skillLogo{
    width: 8em;
}

.sectionHeader{
color:#292F36;
    font-size:5em;
}
.skillsWrapper{
    height:100vh;
}
.aboutPageWrapper {
    height: 100vh;
    margin-top: 4em;
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
    background: white;

}

.slogan {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font: bold 100px Impact, Sans-Serif;
    color: white;
    font-size: 12em;
}

.content {
    height: 800px;
}
</style>
