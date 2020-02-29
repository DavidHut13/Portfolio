<template>
<b-container>
     <b-row>
          <b-col cols="12">
               <h1 class="sectionHeader skillsHeader mb-5">what I can do.</h1>
          </b-col>
          <!--======================= Front end Skill Section ==========================-->
          <b-col data-aos="fade-right" data-aos-delay="500" cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mt-4">
               <b-card class="text-center skillCard">
                    <div class="circle my-5">
                         <i class="icon fas fa-code fa-3x"></i>
                    </div>
                    <h4 class="cardHeader">Development</h4>
                    <p class="hours">800 Hours</p>
                    <!-- <b-badge pill class="skillPill mx-1 " variant="none">Vue.js</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">React</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Bootstrap</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">git</b-badge> -->
                    <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
               </b-card>
          </b-col>
          <!--====================== Graphic Design Skill Section =============================-->
          <b-col data-aos="fade-right" data-aos-delay="400" cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mt-4">
               <b-card class="text-center skillCard">
                    <div class="circle my-5">
                         <i class="icon fab fa-adobe fa-3x"></i>
                    </div>
                    <h4 class="cardHeader">Design</h4>
                    <p class="hours">600 Hours</p>
                    <!-- <b-badge pill class="skillPill mx-1" variant="none">Photoshop</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Illustrator</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Premiere Pro</b-badge> -->
                    <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
               </b-card>
          </b-col>
          <!--============================ Marketing Skill Section ==========================-->
          <b-col data-aos="fade-right" cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mt-4">
               <b-card class="text-center skillCard">
                    <div class="circle my-5">
                         <i class="icon fab fa-facebook-f fa-3x"></i>
                    </div>
                    <h4 class="cardHeader">Marketing</h4>
                    <p class="hours">200 Hours</p>
                    <!-- <b-badge pill class="skillPill mx-1" variant="none">Facebook</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Instagram</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Google</b-badge> -->
                    <p >
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
               </b-card>
          </b-col>
     </b-row>
</b-container>
</template>

<script>
import AOS from 'aos'
export default {
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
     border: 2px solid #ba28f7;
     border-radius: 20px;
     padding: 4px 20px 4px 20px;
     display: inline-block;
     color: #ba28f7;
}
</style>
