<template>
<div class="backgroundColor">
     <b-container fluid>
          <b-row class="mainPageWrapper">
               <b-col cols="8" class=" workIntro">
                    <div>
                         <h4 class="subTitle">I few of my</h4>
                         <h1 class="title">Projects</h1>
                    </div>
               </b-col>
          </b-row>
     </b-container>
     <b-container>
          <b-row class="pb-5">
               <!-- ====================== Websites =======================-->
               <b-col class="mt-5 mb-2" cols="12">
                    <h1 class="catagoryHeader">websites.</h1>
               </b-col>
               <b-col class="my-2" cols="12" sm="6" md="4" xl="3">
                    <b-card class="cardWrapper">
                         <div class="websiteBackground eloan-bg"></div>
                         <div class="projectInfo">
                              <h3 class="projectTitle">Eloan Logic</h3>
                              <p class="projectTools">Vue | BootstrapVue</p>
                              <b-button variant="none" class="viewBtn d-inline-block" pill>View</b-button>
                         </div>
                    </b-card>
               </b-col>
               <b-col class="my-2" cols="12" sm="6" md="4" xl="3">
                    <b-card class="cardWrapper">
                         <div class="websiteBackground gaming-bg"></div>
                         <div class="projectInfo">
                              <h3 class="projectTitle">Streamer</h3>
                              <p class="projectTools">Vue | Twitch API</p>
                              <b-button variant="none" class="viewBtn d-inline-block" pill>View</b-button>
                         </div>
                    </b-card>
               </b-col>
               <b-col class="my-2" cols="12" sm="6" md="4" xl="3">
                    <b-card class="cardWrapper">
                         <div class="websiteBackground auction-bg"></div>
                         <div class="projectInfo">
                              <h3 class="projectTitle">Auction Network</h3>
                              <p class="projectTools">Vue | Google Maps</p>
                              <b-button variant="none" class="viewBtn d-inline-block" pill>View</b-button>
                         </div>
                    </b-card>
               </b-col>
               <b-col class="my-2" cols="12" sm="6" md="4" xl="3">
                    <b-card class="cardWrapper">
                    </b-card>
               </b-col>

               <b-col class="mt-5 mb-2" cols="12">
                    <h1 class="catagoryHeader">Designs.</h1>
               </b-col>
               <b-col class="my-2" cols="12" sm="6" md="4" xl="3">
                    <b-card class="cardWrapper">
                    </b-card>
               </b-col>
               <b-col class="my-2" cols="12" sm="6" md="4" xl="3">
                    <b-card class="cardWrapper">
                    </b-card>
               </b-col>
               <b-col class="my-2" cols="12" sm="6" md="4" xl="3">
                    <b-card class="cardWrapper">
                    </b-card>
               </b-col>
               <b-col class="my-2" cols="12" sm="6" md="4" xl="3">
                    <b-card class="cardWrapper">
                    </b-card>
               </b-col>
          </b-row>
     </b-container>
</div>
</template>

<script>
name: 'work'
export default {

}
</script>

<style lang="scss" scoped>
.projectTools {
     color: #ba28f7;
     font-weight: bold;
     font-family: 'Roboto', sans-serif;
}

.projectTitle {
     font-weight: bold;

}

.projectInfo {
     width: 100%;
     text-align: center;
     position: absolute;
     top: 25%;
     left: 50%;
     color: white;
     transform: translate(-50%, 50%);
     backface-visibility: hidden;
     opacity: 0;
     transition: all .5s;
}

.subTitle {
     font-size: 3rem;
     display: block;
     margin-bottom: -4%;
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

.cardWrapper:hover {
     .projectInfo {
          opacity: 1;
          transform: translate(-50%, 40%);
     }

     .websiteBackground {
          transform: scale(1);
          filter: blur(3px) brightness(69%);
     }
}

.cardWrapper {
     height: 400px;
     overflow: hidden;
     -webkit-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.2);
     -moz-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.2);
     box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.2);
}

.websiteBackground {
     height: 100%;
     width: 100%;
     transform: translateY(-2rem) scale(1.4);
     backface-visibility: hidden;
     transition: all .5s;
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
}

.eloan-bg {
     background-image: url(/img/testing/AdobeStock_308186809.jpeg);
}

.gaming-bg {
     background-image: url(/img/Work/gray-scale-image-of-xbox-game-controller-194511.jpg);
}
.auction-bg{
    background-image: url(/img/Work/backyard-lights-property-32870.jpg);
}

.card-body {
     padding: 0;
}

.card {
     border: none;
}

.workIntro {
     display: flex;
     justify-content: center;
     align-items: center;
     color: black;
}

.mainTitle {
     font-size: 4.25em;
}

.subTitle {
     font-size: 2em;
}

.backgroundColor {
     background-color: rgb(240, 240, 240);
}

.viewBtn {
     transition: all .2s ease-in-out;
     color: white;
     border-radius: 5px;
     border: none;
     padding: 5px 25px 5px 25px;
     -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
     -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
     box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
     background: transparent;
     border: 2px solid #ba28f7;
}

.viewBtn:hover {
     transform: translateY(-4px);
     cursor: pointer;
     -webkit-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
     -moz-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
     box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);

}

.viewBtn:active {
     transform: translateY(-1px);
     -webkit-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
     -moz-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
     box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
     background-image: linear-gradient(to left, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
}

.mainPageWrapper {
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
     height: 100vh;
     background-image: linear-gradient(to bottom, transparent, rgba(240, 240, 240, .85)), url(/img/Work/AdobeStock_282397552.jpeg);
}

.catagoryHeader {
     color: black;
     font-weight: bold;
     font-size: 1.75rem;
     font-family: 'Roboto', sans-serif;
}
</style>
