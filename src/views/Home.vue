<template>
<div>
    <b-container fluid>
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
        <b-row class="mb-5">
            <b-col cols="12">
                <h1 class="sectionHeader skillsHeader mb-5">Skills</h1>
            </b-col>

            <!-- Front end Skill Section -->
            <b-col cols="12" md="4">
                <b-card class="skillCard ">
                    <div class="flexCenter">
                        <div class="text-center">
                            <i class="fas fa-code fa-4x my-5"></i>
                            <h4 class="my-2">Frontend Development</h4>
                        </div>
                    </div>
                    <p>Typewriter flexitarian iceland normcore seitan twee, narwhal sriracha hella irony iPhone cornhole godard. Pop-up actually before they sold out retro forage tacos. Bicycle rights retro everyday carry you probably haven't heard of them iPhone woke squid. </p>
                </b-card>
            </b-col>

            <!-- Graphic Design Skill Section -->
            <b-col cols="12" md="4">
                <b-card class="skillCard ">
                    <div class="flexCenter">
                        <div class="text-center">
                            <i class="fab fa-adobe fa-4x my-5"></i>
                            <h4 class="my-2">Design</h4>
                        </div>
                    </div>
                    <div class='skillParagraph'>
                        <p>Pickled live-edge brunch mumblecore, adaptogen shaman fingerstache cray ennui cronut YOLO mixtape.</p>
                    </div>

                </b-card>
            </b-col>

            <!-- Marketing Skill Section -->
            <b-col cols="12" md="4">
                <!-- ==============  Testing Progress Pie ============== -->
                <div class="flexCenter">
                        <div class="text-center">
                <div class="progress-chart-wrapper">
                    <div class="progress-circle">
                        <div class="progress-fill"></div>
                    </div>
                    <div class="inner-content">
                        <div class="inner-content-wrapper">
                            <i class="fas fa-ad fa-4x my-5"></i>
                        </div>
                    </div>
                </div>
                <h4 class="my-2">Marketing</h4>
                <!-- ==============  Testing Progress Pie ============== -->
                <p> Food truck before they sold out 8-bit, ramps asymmetrical brooklyn man bun knausgaard DIY woke taxidermy chia banh mi raclette. </p>
            </b-col>
            <!-- Tools Icons Section/ Programming language Icons -->
        </b-row>
    </b-container>
    <b-container fluid>
        <b-row class="toolsWrapper flexCenter mb-1">
            <b-col offset="1">
                <b-img class="skillLogo" src="/img/langIcons/npm-logo-red.svg"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/langIcons/Git-Logo-Black.png"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/langIcons/256px-Vue.js_Logo_2.svg.png"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/langIcons/javascript.svg"></b-img>
            </b-col>
            <!-- <b-col class="my-3" cols="2" offset="1">
                <b-img class="skillLogo" src="/img/langIcons/react.svg"></b-img>
            </b-col> -->
            <b-col>
                <b-img class="skillLogo" src="/img/langIcons/react.svg"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/langIcons/css3-logo.png"></b-img>
            </b-col>
            <b-col>
                <b-img class="skillLogo" src="/img/langIcons/icon_512.67aef2.png"></b-img>
            </b-col>
            <b-col>
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
            myPercent: '70'
        }
    },
    methods: {
        skillsProgress() {
            var $ppc = $('.progress-chart-wrapper'),
                percent = 75,
                deg = 360 * percent / 100;
            if (percent > 50) {
                $ppc.addClass('gt-50');
            }
            $('.progress-fill').css('transform', 'rotate(' + deg + 'deg)');
            $('.inner-content span').html(percent + '%');
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

.progress-chart-wrapper {
    width: $size;
    height: $size;
    border-radius: 50%;
    background-color: #e5e5e5;
    position: relative;

    &.gt-50 {
        background-color: #81ce97;
    }
}

.progress-circle {
    @include circle($size);
    clip: rect(0, $size, $size, #{$size/2});

    .progress-fill {
        @include circle($size);
        clip: rect(0, #{$size/2}, $size, 0);
        background: #81ce97;
        transform: rotate(60deg);
    }

    .gt-50 & {
        clip: rect(0, #{$size/2}, $size, 0);

        .progress-fill {
            clip: rect(0, $size, $size, #{$size/2});
            background: #e5e5e5;
        }
    }
}

.inner-content {
    @include circle(#{$size/1.15});
    background: #fff;
    text-align: center;
    display: table;

    span {
        display: block;
        font-size: 2.6em;
        font-weight: bold;
        color: #81ce97;
    }
}

.inner-content-wrapper {
    display: table-cell;
    vertical-align: middle;
}

body {
    font-family: Arial;
    background: #f7f7f7;
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
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    background-image: url(/img/vlad-busuioc-xyPxcqh8Tt8-unsplash.jpg);
    z-index: -1;
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
