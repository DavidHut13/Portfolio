<template>
<div class="backgroundColor">
    <b-container fluid>
        <b-row class="mainPageWrapper">
            <b-col cols="8" class=" workIntro">
                <div>
                    <h1 class="title ml-5">Projects</h1>
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
            <b-col cols="12" lg="10">
                <carousel :responsive="{0:{items:2},750:{items:3}}" :nav="false" :dots="false">
                    <b-card class="cardWrapper">
                        <div class="websiteBackground eloan-bg"></div>
                        <div class="projectInfo">
                            <h3 class="projectTitle">Eloan Logic</h3>
                            <p class="projectTools">Vue | BootstrapVue</p>
                            <b-button @click="showModal(eloanData,eloanPics)" variant="none" class="viewBtn d-inline-block" pill>View</b-button>
                        </div>
                    </b-card>
                    <b-card class="cardWrapper">
                        <div class="websiteBackground gaming-bg"></div>
                        <div class="projectInfo">
                            <h3 class="projectTitle">Streamer</h3>
                            <p class="projectTools">Vue | Twitch API</p>
                            <b-button @click="showModal(streamerData,streamerPics)" variant="none" class="viewBtn d-inline-block" pill>View</b-button>
                        </div>
                    </b-card>
                    <b-card class="cardWrapper">
                        <div class="websiteBackground auction-bg"></div>
                        <div class="projectInfo">
                            <h3 class="projectTitle">Auction Network</h3>
                            <p class="projectTools">Vue | Google Maps</p>
                            <b-button @click="showModal(auctionData,auctionPics)" variant="none" class="viewBtn d-inline-block" pill>View</b-button>
                        </div>
                    </b-card>
                </carousel>
            </b-col>

            <b-col cols="12">
                <details-modal :projectInfo="modalData" :projectPics="modalPics"></details-modal>
            </b-col>
            <b-col class="mt-5 mb-2" cols="12">
                <h1 class="catagoryHeader">Creative.</h1>
            </b-col>
            <b-col cols="12" lg="10">
                <carousel :responsive="{0:{items:2},750:{items:3}}" :nav="false" :dots="false">
                    <b-card class="cardWrapper">
                        <div class="websiteBackground logo-bg"></div>
                        <div class="projectInfo">
                            <h3 class="projectTitle">Logo's</h3>
                            <p class="projectTools">illustrator | PhotoShop</p>
                            <b-button @click="showModal(designData,designPics)" variant="none" class="viewBtn d-inline-block" pill>View</b-button>
                        </div>
                    </b-card>
                    <b-card class="cardWrapper">
                        <div class="websiteBackground video-bg"></div>
                        <div class="projectInfo">
                            <h3 class="projectTitle">video</h3>
                            <p class="projectTools">Premiere Pro | Drones</p>
                            <b-button variant="none" class="viewBtn d-inline-block" pill>Coming Soon</b-button>
                        </div>
                    </b-card>
                </carousel>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import detailsModal from '../components/modal.vue'
name: 'work'
export default {
    data() {
        return {
            modalPics: [],

            modalData: {},
            eloanData: {
                name: 'Eloan Logic',
                urlLink: 'https://eloanlogic.firebaseapp.com/',
                details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit adipisci earum labore laborum placeat nisi iusto inventore? Ea ex magni ratione, ipsa libero ipsum autem obcaecati officiis asperiores cupiditate.'
            },
            eloanPics: ['/img/Work/websiteShots/Logic/Logic-1.png', '/img/Work/websiteShots/Logic/Logic-2.png', '/img/Work/websiteShots/Logic/Logic-3.png', '/img/Work/websiteShots/Logic/Logic-4.png'],
            streamerData: {
                name: 'Streamer',
                urlLink: 'https://streamerapp-fab47.firebaseapp.com/',
                details: 'This is a project to tes the twitch api.'
            },
            streamerPics: ['/img/Work/websiteShots/Streamer/streamer-1.png', '/img/Work/websiteShots/Streamer/streamer-2.png'],
            auctionData: {
                name: 'Auction Network',
                urlLink: 'https://auctionnetwork-1558556770854.firebaseapp.com/',
                details: 'A zillow type mockup website. Made with vue,BootstrapVue, Google Maps API, Google Maps autocomple API'
            },
            auctionPics: ['/img/Work/websiteShots/ANetwork/ANetwork-1.png', '/img/Work/websiteShots/ANetwork/ANetwork-2.png', '/img/Work/websiteShots/ANetwork/ANetwork-3.png', '/img/Work/websiteShots/ANetwork/ANetwork-4.png', '/img/Work/websiteShots/ANetwork/ANetwork-5.png'],
            designData: {
                name: 'Logo Creation',
                details: "Over the years I have enjoyed all things branding"
            },
            designPics: ['/img/Work/Designs/Logos/billyCoder.jpg', '/img/Work/Designs/Logos/BlackBox.jpg', '/img/Work/Designs/Logos/GeekLogic.jpg', '/img/Work/Designs/Logos/candleLabel.jpg', '/img/Work/Designs/Logos/partTime.jpg', '/img/Work/Designs/Logos/smellys.jpg', '/img/Work/Designs/Logos/vividDigital.jpg']
        }
    },
    components: {
        detailsModal,
        carousel
    },

    methods: {
        showModal(data, pics) {
            this.modalData = data;
            this.modalPics = pics;
            this.$bvModal.show('detailsModal')
        },
        hideModal() {
            this.$refs['viewModal'].hide()
        }
    }
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left:.5rem;
    margin-right:.5rem;

}

.projectInfo {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 18%;
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
   font-family: 'Roboto', sans-serif;
}

.title {
    color: white;
    text-shadow: 2px 2px 3px rgba(145, 145, 145, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    font-size: 9rem;
    font-family: 'Staatliches', cursive;
}

@media(max-width:740px) {
    .title {
        font-size: 4.5rem;
    }

    .subTitle {
        font-size: 1rem;
    }
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
    overflow: hidden;
    margin:.5rem;
      -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
}

.websiteBackground {
    height: 350px;
    transform: translateY(-2rem) scale(1.4);
    backface-visibility: hidden;
    transition: all .5s;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

@media (min-width:1200px) {
    .websiteBackground {
        height: 450px;
    }
}

@media (max-width:500px) {
    .websiteBackground {
        height: 270px;
    }
}

.eloan-bg {
    background-image: url(/img/Work/AdobeStock_308186809.jpg);
}

.gaming-bg {
    background-image: url(/img/Work/gray-scale-image-of-xbox-game-controller-194511.jpg);
}

.auction-bg {
    background-image: url(/img/Work/backyard-lights-property-32870.jpg);
}

.logo-bg {
    background-image: url(/img/Work/logo.jpg);
}

.video-bg {
    background-image: url(/img/Work/video.jpg);
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
    background-image: linear-gradient(to bottom, transparent 0%, transparent 50%, rgb(255, 255, 255) 98%), url(/img/home/architecture-buildings-city-280193.jpg);
}

.catagoryHeader {
    color: #292F36;
    font-size: 1.75rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
</style>
