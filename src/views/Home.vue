<template>
<div>
     <!--======================== Home Screen =========================-->
     <b-container fluid>
          <b-row>
               <b-col cols="12" class="homepage_background">

               </b-col>
               <b-col cols="12" md="10" offset-md="1" lg="8" class="titleWrapper" offset-lg="3">
                    <h4 class="subTitle">Frontend</h4>
                    <transition name="slide">
                         <component :is="view"></component>
                    </transition>
               </b-col>
          </b-row>

          <!--========================== About Section ====================== -->
          <b-row>
               <b-col>
                    <about-section></about-section>
               </b-col>
          </b-row>

          <!--=========================== Skills Section ======================-->
          <b-row class="skillsSection ">
               <b-col cols="12" class="backgroundSplash"></b-col>
               <b-col>
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
import AOS from 'aos'
import contactSection from '../components/contact.vue';
import skillCard from '../components/skills.vue'
import aboutSection from '../components/about'

export default {

     name: 'home',
     data() {
          return {
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
                         src: "/img/Home/langIcons/HTML5_Badge_512.png"
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
     mounted() {
          import('aos').then(AOS => AOS.init({
               once: false,
               delay: 300,
               mirror: true,
               anchorPlacement: 'center-bottom',

          }));
     },
     created() {
          this.displayTimer();
     },
     destroyed() {
          AOS.refresh();
     },
     methods: {
          displayTimer() {
               setInterval(() => {
                    if (this.view == "isDesign") {
                         this.view = "isDeveloper"
                         return;
                    }
                    if (this.view == "isDeveloper") {
                         this.view = "isDesign"
                         return;
                    }
               }, 5000);

          }
     },
     components: {
          contactSection,
          skillCard,
          aboutSection,
          'isDeveloper': {
               template: '<h1 class="title">Developer</h1>'
          },
          'isDesign': {
               template: '<h1 class="title">Designer</h1>'
          }
     }

}
</script>

<style lang="scss" scoped>
.contactSection {
     margin-bottom: 12%;
}

.skillsSection {
     position: relative;
     margin-top: 10%;
     margin-bottom: 20%;
}

.backgroundSplash {
     background-position: center;
     background-size: cover;
     height: 85%;
     position: absolute;
     top: 25%;
     z-index: 0;
     background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
     -webkit-clip-path: polygon(0 0, 100% 0, 100% 70vh, 0 100%);
     clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
}

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

.toolsWrapper {
     background: rgba(255, 255, 255, 0.562);
     display: flex;
     justify-content: center;
     align-items: center;
}

.skillLogo {
     width: 3.5em;
     filter: grayscale(.5);
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
     height: 50vh;
     text-align: center;
     margin-top: 140px;
     mask-image: url(/img/testing/ArrowBracketMask.svg);
     mask-repeat: no-repeat;
     mask-position: center;
     background-image: url(/img/Archive/vlad-busuioc-xyPxcqh8Tt8-unsplash.jpg);
}

.bg-color {
     background: rgb(240, 239, 239);
}

.subTitle {
     font-size: 3rem;
     display: block;
     margin-bottom: -20px;
     position: absolute;
     color: rgb(102, 102, 102);
     font-family: 'Raleway', sans-serif;

}

.title {
     color: rgb(43, 43, 43);
     font-size: 9rem;
     font-family: 'Staatliches', cursive;
     position: absolute;
     top:10%;
}

.titleWrapper {
    height:20rem;
}

@media(max-width:640px) {
     .title {
          font-size: 5.3rem;
     }

     .subTitle {
          font-size: 2rem;
     }

}

@media(max-width:540px) {
     .backgroundSplash {
          top: 15%;
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
     transform: translateX(-550px);
}

.slide-enter-to {
     opacity: 1;

}


.slide-leave-to {
     opacity: 0;
     transform: translateX(550px);
}
</style>
