<template>
<div>
    <b-container fluid>
        <b-row>
            <b-col class="homepage_background">
                <div class="flexCenter">
                       <h1 class="slogan text-center">Front-end Developer | Designer</h1>
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
                <b-img class="profileImg" src="/img/home/Hutto_David_DFW_Web Maintenance_500.jpg"></b-img>
            </b-col>
        </b-row>
        <b-row class="mb-5">
            <b-col cols="12">
                <h1 class="sectionHeader skillsHeader mb-5">Skills</h1>
            </b-col>
   <!-- Front end Skill Section -->
            <b-col cols="12" md="4">
                <div class="flexCenter">
                    <div class="text-center">
                        <div class="progress-chart-wrapper development">
                            <div class="progress-circle">
                                <div class="progress-fill development-fill"></div>
                            </div>
                            <div class="inner-content">
                                <div class="inner-content-wrapper">
                                    <i class="fas fa-code fa-4x my-5"></i>
                                </div>
                            </div>
                        </div>
                        <h4 class="my-2">Frontend Development</h4>
                    </div>
                </div>
                <!-- ==============  Testing Progress Pie ============== -->
                <p> Food truck before they sold out 8-bit, ramps asymmetrical brooklyn man bun knausgaard DIY woke taxidermy chia banh mi raclette. </p>
            </b-col>

            <!-- Graphic Design Skill Section -->
            <b-col cols="12" md="4">
                <div class="flexCenter">
                    <div class="text-center">
                        <div class="progress-chart-wrapper design">
                            <div class="progress-circle">
                                <div class="progress-fill design-fill "></div>
                            </div>
                            <div class="inner-content">
                                <div class="inner-content-wrapper">
                                    <i class="fab fa-adobe fa-4x my-5"></i>
                                </div>
                            </div>
                        </div>
                        <h4 class="my-2">Design</h4>
                    </div>
                </div>
                <!-- ==============  Testing Progress Pie ============== -->
                <p> Food truck before they sold out 8-bit, ramps asymmetrical brooklyn man bun knausgaard DIY woke taxidermy chia banh mi raclette. </p>
            </b-col>

            <!-- Marketing Skill Section -->
            <b-col cols="12" md="4">
                <!-- ==============  Testing Progress Pie ============== -->
                <div class="flexCenter">
                    <div class="text-center">
                        <div class="progress-chart-wrapper marketing">
                            <div class="progress-circle">
                                <div class="progress-fill marketing-fill"></div>
                            </div>
                            <div class="inner-content">
                                <div class="inner-content-wrapper">
                                    <i class="fas fa-ad fa-4x"></i>
                                    <h6 class="m-0 p-0">500hrs</h6>
                                </div>
                            </div>
                        </div>
                        <h4 class="my-2">Marketing</h4>
                    </div>
                </div>
                <!-- ==============  Testing Progress Pie ============== -->
                <p> Food truck before they sold out 8-bit, ramps asymmetrical brooklyn man bun knausgaard DIY woke taxidermy chia banh mi raclette. </p>
            </b-col>
            <!-- Tools Icons Section/ Programming language Icons -->
        </b-row>
    </b-container>
    <b-container fluid>
        <b-row class="toolsWrapper flexCenter mb-1">
            <b-col offset="1">
                <b-img class="skillLogo" src="/img/home/langIcons/npm-logo-red.svg"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/home/langIcons/Git-Logo-Black.png"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/home/langIcons/256px-Vue.js_Logo_2.svg.png"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/home/langIcons/javascript.svg"></b-img>
            </b-col>
            <!-- <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/react.svg"></b-img>
            </b-col> -->
            <b-col>
                <b-img class="skillLogo" src="/img/home/langIcons/react.svg"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/home/langIcons/css3-logo.png"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/home/langIcons/icon_512.67aef2.png"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/home/langIcons/Creative_Cloud.svg"></b-img>
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
            myPercent: '70'
        }
    },
    methods: {
        skillsProgress() {
            var $develop = $('.development')
            var $design = $('.design')
            var $marketing = $('.marketing')
            var developmentPercent = 70;
            var marketingPercent = 45;
            var designPercent = 35;
            var designDeg = 360 * designPercent / 100;
            var marketDeg = 360 * marketingPercent / 100;
            var devDeg = 360 * developmentPercent / 100;
            if (developmentPercent > 50) {
                $develop.addClass('gt-50');
            }
            if (designPercent > 50) {
                $design.addClass('gt-50');
            }
            if (marketingPercent > 50) {
                $marketing.addClass('gt-50');
            }
            $('.development-fill').css('transform', 'rotate(' + devDeg + 'deg)');
            $('.design-fill').css('transform', 'rotate(' + designDeg + 'deg)');
            $('.marketing-fill').css('transform', 'rotate(' + marketDeg + 'deg)');
        }
    },
    mounted() {
        this.skillsProgress()
    }
}
</script>

<style lang="scss" scoped>
/* progress circle chart */
@mixin circle($size) {
    content: "";
    position: absolute;
    border-radius: 50%;
    left: calc(50% - #{$size/2});
    top: calc(50% - #{$size/2});
    width: $size;
    height: $size;
}
$size: 200px;
.development, .devlopment-fill {
   background-image: linear-gradient(to right top, #52b7e8, #0eaaf2, #009bfa, #008bff, #0077ff, #0080ff, #0088ff, #0090ff, #00b1ff, #00ceff, #00e8ff, #60fff8);
}
.design-fill {
  background-image: linear-gradient(to right top, #e73b94, #ed3b8e, #f23c88, #f63d82, #fa3f7c, #fc4e7f, #fe5a82, #ff6686, #ff7c94, #ff90a2, #ffa3b1, #ffb5bf);
}
.marketing-fill {
   background-image: linear-gradient(to right top, #37b34a, #48c161, #58cf77, #68de8d, #79eca3, #7bf2a7, #7ef9ab, #80ffaf, #76ffa1, #6dff92, #65ff81, #60ff6e);
}
.progress-chart-wrapper {
    width: $size;
    height: $size;
    border-radius: 50%;
    position: relative;
}
.progress-circle {
    @include circle($size);
    clip: rect(0, $size, $size, #{$size/2});
    .progress-fill {
        @include circle($size);
        clip: rect(0, #{$size/2}, $size, 0);
        transform: rotate(60deg);
    }
    .gt-50 & {
        clip: rect(0, #{$size/2}, $size, 0);
 border:none;
        .progress-fill {
            clip: rect(0, $size, $size, #{$size/2});
            background: white;
           
        }
    }
}
.inner-content {
    @include circle(#{$size/1.15});
    background: #fff;
    text-align: center;
    display: table;
    -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
}
.inner-content-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.progress-chart-wrapper {
    margin: 50px auto 0;
}
/* progress circle chart */
.skillCard {
    -webkit-box-shadow: 0px 0px 12px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 12px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 12px -6px rgba(0, 0, 0, 0.75);
    height: 450px;
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
    height: 130px;
}
.skillLogo {
    width: 3.5em;
    filter: grayscale(.75);
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
    background: white;
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
</style>