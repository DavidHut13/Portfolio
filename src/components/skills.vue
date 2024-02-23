<template>
<b-container>
     <b-row>
          <b-col cols="12">
               <h1 class="sectionHeader skillsHeader mb-5">what I can do.</h1>
          </b-col>
          <!--======================= Front end Skill Section ==========================-->
          <b-col data-aos="fade-right" data-aos-delay="300" cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mt-4">
               <b-card class=" skillCard">
                    <div class="circle mt-5 mb-4">
                         <i class="icon fab fa-html5 fa-3x"></i>
                         
                    </div>
                    <h4 class="cardHeader">Frontend.</h4>
                    <hr class="underline text-left">
                    <div v-for="(progress,index) in frontend" :key="index">
                         <progress-bar :key="index" :prop="progress"></progress-bar>
                    </div>
               </b-card>
          </b-col>
          <!--====================== Graphic Design Skill Section =============================-->
          <b-col data-aos="fade-right" data-aos-delay="200" cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mt-4">
               <b-card class="skillCard">
                    <div class="circle mb-4 mt-5">
                         <i class="icon fas fa-code fa-3x"></i>
                    </div>
                    <h4 class="cardHeader">Backend.</h4>
                    <hr class="underline text-left">
                    <div v-for="(progress,index) in backend" :key="index">
                         <progress-bar :key="index" :prop="progress"></progress-bar>
                    </div>
               </b-card>
          </b-col>
          <!--============================ Marketing Skill Section ==========================-->
          <b-col data-aos="fade-right" cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mt-4">
               <b-card class=" skillCard">
                    <div class="circle mb-4 mt-5">
                         <i class="icon fas fa-database fa-3x"></i>
                    </div>
                    <h4 class="cardHeader">Database.</h4>
                    <hr class="underline text-left">
                    <div v-for="(progress,index) in database" :key="index">
                         <progress-bar :key="index" :prop="progress"></progress-bar>
                    </div>
               </b-card>
          </b-col>
     </b-row>
</b-container>
</template>

<script>
import progressBar from '../components/ProgressBar.vue'
export default {
     data() {
          return {
               frontend: [ {
                    label: 'React: 4 years',
                    percent: '80%'
               },{
                    label: 'React Native: 3 years',
                    percent: '60%'
               }, {
                    label: 'Vue.js: 2 years',
                    percent: '40%'
               }],
               backend: [ {
                    label: 'Node.js: 2 year',
                    percent: '40%'
               },{
                    label: '.NET: 1 year',
                    percent: '20%'
               },
               {
                    label: 'Python: 1 years',
                    percent: '20%'
               }, ],
               database: [
                     {
                    label: 'MySQL: 2 years',
                    percent: '40%'
               },{
                    label: 'MongoDB: 1 years',
                    percent: '20%'
               }]
          }
     },
     components: {
          progressBar,
     }

}
</script>

<style scoped>
.sectionHeader {
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
     -webkit-box-shadow: 0px 2px 18px 0px rgba(97, 97, 97, 0.3);
     -moz-box-shadow: 0px 2px 18px 0px rgba(97, 97, 97, 0.3);
     box-shadow: 0px 2px 18px 0px rgba(97, 97, 97, 0.3);
     transition: all .3s ease-out;
}

.skillCard:hover {
     transform: translateY(-15px) scale(1.01);
     -webkit-box-shadow: 0px 2px 25px 0px rgba(97, 97, 97, 0.3);
     -moz-box-shadow: 0px 2px 25px 0px rgba(97, 97, 97, 0.3);
     box-shadow: 0px 2px 25px 0px rgba(97, 97, 97, 0.3);
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
     -webkit-box-shadow: 0px 0px 17px -4px rgba(105, 105, 105, .6);
     -moz-box-shadow: 0px 0px 17px -4px rgba(105, 105, 105, .6);
     box-shadow: 0px 0px 17px -4px rgba(105, 105, 105, .6);
}

.icon {
     color: #9a3cf4;
}


.cardHeader {
     border: none;
     border-radius: 0px 0px 10px 10px;
     color: rgb(54, 54, 54);
     font-size: 1.75rem;
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
