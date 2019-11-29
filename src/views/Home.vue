<template>
<div>
    <b-container class="bg-color" fluid>
        <b-row>
            <b-col class="homepage_background">
                <div class="flexCenter">
                    <h1 class="slogan text-center">Be Bold.</h1>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <b-container>
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
                <b-img class="profileImg" src="/img/Hutto_David_DFW_Web Maintenance_500.jpg"></b-img>
            </b-col>
        </b-row>
        <b-row class="pb-5">
            <b-col cols="12">
                <h1 class="sectionHeader skillsHeader">Skills</h1>
            </b-col>
            <b-col class="flexCenter">
                <h2 class="mx-3 chartLabelDevelop">Development</h2>
                <h2 class="mx-3 chartLabelDesign">Design</h2>
                <h2 class="mx-3 chartLabelMarketing">Marketing</h2>
            </b-col>
            <b-col cols="12">
                <canvas id="skillsChart"></canvas>
            </b-col>

            <!-- <b-col cols="10" offset="1">
                <h4>Front end Development</h4>
            </b-col> -->
            <!-- <b-col cols="10" offset="1">
                <h4>Graphic Design</h4>
            </b-col>
            <b-col cols="10" offset="1">
                <h4>Marketing</h4>
            </b-col>
            <b-col cols="5" offset="1" class="d-flex justify-content-center align-items-center">
                <h3 class="skillsHeader">Video and 3d Software</h3>
            </b-col>
            <b-col cols="5">
                <b-img src="/img/home/BlenderScreenShot.jpg"></b-img>
            </b-col> -->

            <!-- Tools Icons Section/ Programming language Icons -->
            <b-col cols="10">
                <h1 class="sectionHeader toolsHeader">Tools</h1>
            </b-col>
            <b-col class="my-5" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/npm-logo-red.svg"></b-img>
            </b-col>
            <b-col class="my-5" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/Git-Logo-Black.png"></b-img>
            </b-col>
            <b-col class="my-5" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/256px-Vue.js_Logo_2.svg.png"></b-img>
            </b-col>
            <b-col class="my-5" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/javascript.svg"></b-img>
            </b-col>
            <!-- <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/react.svg"></b-img>
            </b-col> -->
            <b-col class="my-5" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/react.svg"></b-img>
            </b-col>
            <b-col class="my-5" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/css3-logo.png"></b-img>
            </b-col>
            <b-col class="my-5" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/icon_512.67aef2.png"></b-img>
            </b-col>
            <b-col class="my-5" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/Creative_Cloud.svg"></b-img>
            </b-col>
        </b-row>
    </b-container>

</div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '../components/ChartData.js';
export default {
    name: 'home',
    data() {
        return {
            planetChartData: planetChartData,
        }
    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        }
    },
    mounted() {
        this.createChart('skillsChart', this.planetChartData);
    }

}
</script>

<style scoped>
@media (max-width:992px) {
    .aboutWrapper {
        order: 2;
    }

    .aboutPic {
        order: 1;
    }
}

.chartLabelDevelop {
    color: #E63C94;
    font-family: 'Staatliches', cursive;
}

.chartLabelDesign {
    color: #37B34A;
    font-family: 'Staatliches', cursive;
}

.chartLabelMarketing {
    color: #56b7e7;
    font-family: 'Staatliches', cursive;
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
    font-weight:bold;

}

.profileImg {
    border-radius: 300px;
}

.skillLogo {
    width: 8em;
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
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    background-image: url(/img/vlad-busuioc-xyPxcqh8Tt8-unsplash.jpg);
}

.bg-color {
    background: rgba(230, 60, 148, 0.719);

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
