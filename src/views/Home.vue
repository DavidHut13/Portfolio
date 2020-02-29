<template>
<div>
     <!--======================== Home Screen =========================-->
     <b-container fluid>
          <b-row>
               <b-col cols="12" class="homepage_background">

               </b-col>
               <b-col cols="10" offset="1" md="10" lg="7" class="titleWrapper flexCenter" offset-lg="2" xl="4" offset-xl="4">
                    <div>
                         <h4 class="subTitle">Frontend</h4>
                         <transition name="slide">
                              <component :is="view"></component>
                         </transition>
                    </div>
               </b-col>
          </b-row>

          <!--========================== About Section ====================== -->
          <b-row class="aboutSection ">
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
          // this.displayTimer();
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

.aboutSection{
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


.backgroundSplash {
    -webkit-box-shadow: inset 0px 0px 30px 1px rgba(0,0,0,0.75);
     -moz-box-shadow: inset 0px 0px 30px 1px rgba(0,0,0,0.75);
     box-shadow: inset 0px 0px 30px 1px rgba(0,0,0,0.75);
     background-position: center;
     background-size: cover;
     height: 100%;
     position: absolute;
     top: 25%;
     z-index: 0;
     background-image: linear-gradient(to bottom, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
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
     font-family: 'Staatliches';
}

.toolsWrapper {
     background: rgba(255, 255, 255, 0.562);
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
     margin-top: 140px;
     mask-image: url(/img/testing/ArrowBracketMask.svg);
     mask-repeat: no-repeat;
     mask-position: center;
     background-image:linear-gradient(to bottom, rgba(251,40,247,.71) rgba(154,60,244,.3)) , url(/img/Archive/vlad-busuioc-xyPxcqh8Tt8-unsplash.jpg), ;
}


.bg-color {
     background: rgb(240, 239, 239);
}

.subTitle {
     font-size: 3rem;
     display: block;
     margin-bottom:-4%;
     color: rgb(54, 54, 54);
     font-family: 'Raleway', cursive;
}

.title {
     color: rgb(54, 54, 54);
     text-shadow: 2px 2px 3px rgba(145, 145, 145, 0.5);
     -webkit-background-clip: text;
     -moz-background-clip: text;
     background-clip: text;
     font-size: 9rem;
     font-family: 'Staatliches', cursive;
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
          .titleWrapper {
    height:10rem;
}
}

@media(max-width:540px) {
     .backgroundSplash {
          top: 15%;
          height:85%;
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
