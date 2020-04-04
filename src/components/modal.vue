<template>
<b-modal v-model="modalOpen" size="lg" id="detailsModal" centered hide-footer hide-header>
    <carousel v-if="loaded" :nav="false" :items="1">
        <div class="mx-2 p-2" v-for="(pic,index) in projectPics" :key="index">
            <b-img class="screenShots" fluid :src="pic"></b-img>
        </div>
    </carousel>
    <content-loader v-if="!loaded" class="loaderSquare" :width="810" :height="491" :speed="1" primaryColor="#bbbbbb" secondaryColor="#efefef">
        <rect x="11" y="9" rx="7" ry="10" width="786" height="412" />
    </content-loader>
    <h4 class="title ml-4">{{projectInfo.name}}</h4>
    <p class="paragraph ml-4">{{projectInfo.details}}</p>
    <b-button  v-if="projectInfo.name != 'Logo Creation'"  @click="viewSite" class="mr-3 mb-2 demoBtn float-right" variant="none">Live Demo</b-button>
    <b-button v-if="projectInfo.name == 'Logo Creation'" @click="$bvModal.hide('detailsModal')" class="mr-3 mb-2 demoBtn float-right" variant="none">Close</b-button>
</b-modal>
</template>

<script>
import {
    ContentLoader
} from 'vue-content-loader'
import carousel from 'vue-owl-carousel'
export default {
    name: 'detailsModal',
    data() {
        return {
            loaded: false,
            modalOpen: false
        }

    },
    watch: {
        modalOpen: function () {
            if (this.modalOpen == true) {
                this.loaded = false;
            }
            if (this.modalOpen == true) {
                setTimeout(() => {
                    this.loaded = true;
                }, 800);
            }
            if(this.modalOpen == false){
                this.loaded = false;
            }
        }
    },
    components: {
        carousel,
        ContentLoader
    },
    props: ["projectInfo", "projectPics"],
    methods: {
        viewSite() {
            window.open(this.projectInfo.urlLink, '_blank');
        },
    }
}
</script>

<style scoped>
.placeHolder {
    width: 100%;
    height: 100%;
    background: black;
}

img {
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
}

::v-deep .modal-content {
    border: none;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.3);
}

rect {
    border: none;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.3);
}

.title {
    color: #292F36;
    font-weight: bold;
    font-size: 1.65rem;
    font-family: 'Roboto', sans-serif;
}

.paragraph {
    color: rgb(88, 77, 99);
    width: 75%;
}

::v-deep button:focus {
    outline-color: #9A3CF4;
}

::v-deep .owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
    background: #9A3CF4;

}

.demoBtn {
    transition: all .2s ease-in-out;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 5px 25px 5px 25px;
    -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    background: transparent;
    border: none;
    background-image: linear-gradient(to left, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
}

.demoBtn:hover {
    transform: translateY(-4px);
    cursor: pointer;
    -webkit-box-shadow: 0px 10px 17px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 17px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 17px -8px rgba(0, 0, 0, 0.68);
}

.demoBtn:active {
    transform: translateY(-1px);
    -webkit-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
    background-image: linear-gradient(to left, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
}
</style>
