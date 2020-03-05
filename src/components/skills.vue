<template>
<b-container>
     <b-row>
          <b-col cols="12">
               <h1 class="sectionHeader skillsHeader mb-5">what I can do.</h1>
          </b-col>
          <!--======================= Front end Skill Section ==========================-->
          <b-col data-aos="fade-right" data-aos-delay="500" cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mt-4">
               <b-card class=" skillCard">
                    <div class="circle mt-5 mb-4">
                         <i class="icon fas fa-code fa-3x"></i>
                    </div>
                    <h4 class="cardHeader">Development.</h4>
                    <hr class="underline">
                    <div v-for="(progress,index) in development" :key="index">
                         <progress-bar :key="index" :prop="progress"></progress-bar>
                    </div>
               </b-card>
          </b-col>
          <!--====================== Graphic Design Skill Section =============================-->
          <b-col data-aos="fade-right" data-aos-delay="400" cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mt-4">
               <b-card class="skillCard">
                    <div class="circle mb-4 mt-5">
                         <i class="icon fab fa-adobe fa-3x"></i>
                    </div>
                    <h4 class="cardHeader">Design.</h4>
                    <hr class="underline">
                    <div v-for="(progress,index) in design" :key="index">
                         <progress-bar :key="index" :prop="progress"></progress-bar>
                    </div>
               </b-card>
          </b-col>
          <!--============================ Marketing Skill Section ==========================-->
          <b-col data-aos="fade-right" cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mt-4">
               <b-card class=" skillCard">
                    <div class="circle mb-4 mt-5">
                         <i class="icon fab fa-facebook-f fa-3x"></i>
                    </div>
                    <h4 class="cardHeader">Marketing.</h4>
                    <hr class="underline">
                    <div v-for="(progress,index) in marketing" :key="index">
                         <progress-bar :key="index" :prop="progress"></progress-bar>
                    </div>
               </b-card>
          </b-col>
     </b-row>
</b-container>
</template>

<script>
import AOS from 'aos'
import progressBar from '../components/ProgressBar.vue'
export default {
     data() {
          return {
               development: [{
                    label: 'REACT',
                    percent: '20%'
               }, {
                    label: 'VUE',
                    percent: '80%'
               }, {
                    label: 'GIT',
                    percent: '80%'
               }],
               design: [{
                    label: 'Illustrator',
                    percent: '90%'
               }, {
                    label: 'PhotoShop',
                    percent: '40%'
               }, {
                    label: 'Premiere Pro',
                    percent: '80%'
               }],
               marketing: [{
                    label: 'Facebook Ads',
                    percent: '90%'
               }, {
                    label: 'Google Ads',
                    percent: '50%'
               }, {
                    label: 'Instagram Ads',
                    percent: '90%'
               }]
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
     destroyed() {
          AOS.refresh();
     },
     components: {
          progressBar,
     }

}
</script>

<style scoped>
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

.skillsHeader {
     margin-top: 2em;
}

.skillCard {
     height: 475px;
     border: none;
     border-radius: 10px;
     -webkit-box-shadow: 0px 12px 25px 8px rgba(97, 97, 97, 0.3);
     -moz-box-shadow: 0px 12px 25px 8px rgba(97, 97, 97, 0.3);
     box-shadow: 0px 12px 25px 8px rgba(97, 97, 97, 0.3);
     transition: all .3s ease-out;
}

.skillCard:hover {
     transform: translateY(-15px) scale(1.01);
     -webkit-box-shadow: 0px 23px 25px 8px rgba(97, 97, 97, 0.4);
     -moz-box-shadow: 0px 23px 25px 8px rgba(97, 97, 97, 0.4);
     box-shadow: 0px 23px 25px 8px rgba(97, 97, 97, 0.4);
}

.circle {
     height: 100px;
     width: 100px;
     margin: auto;
     background: white;
     border: none;
     border-radius: 50px;
     display: flex;
     justify-content: center;
     align-items: center;
     -webkit-box-shadow: 0px 0px 30px -6px rgba(105, 105, 105, .2);
     -moz-box-shadow: 0px 0px 30px -6px rgba(105, 105, 105, .2);
     box-shadow: 0px 0px 30px -6px rgba(105, 105, 105, .2);
}

.icon {
     position: relative;
     top: 0;
     background-color: #d37cff;
     color: transparent;
     text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.6);
     -webkit-background-clip: text;
     -moz-background-clip: text;
     background-clip: text;
}

.hours {
     color: rgb(92, 92, 92);
     font-weight: bold;
     font-family: 'raleway';
}

.cardHeader {
     border: none;
     border-radius: 0px 0px 10px 10px;
     color: rgba(95, 95, 95, 0.945);
     font-size: 2rem;
     background: white;
     font-weight: bold;
     margin-top: 4rem;
     font-family: 'Roboto', sans-serif;

}

.underline {
     margin: 0;
     padding: 0;
     margin-bottom: 1.25rem;
     width: 20%;
}

.card-body {
     padding-top: .5rem;
}
</style>
