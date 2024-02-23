<template>
<b-container>
    <b-row class="mt-5 aboutPageWrapper">
        <b-col cols="12" class="aboutHeader">
            <h1 class="sectionHeader">about me</h1>
        </b-col>
        <b-col cols="12" md="10" offset-md="1" lg="6" offset-lg="0" class="aboutWrapper">
            <div>
                <h1 data-aos="fade-right" class="aboutName">David Hutto</h1>
                <p data-aos="fade-right" data-aos-delay="100" class="aboutPara">An accomplished software engineer with hands-on experience in developing and delivering high-quality products using React, Redux, Node, and .NET. Contributed to projects in fast-paced environments, collaborating with cross-functional teams. Committed to continuous learning and professional growth.</p>
                <b-button @click="downloadCV()" size="lg" class="downloadBtn" variant="none">View Resume</b-button>
            </div>
        </b-col>
        <b-col cols="12" lg="6" class="mb-5 flexCenter">
            <div class="pictureFlip">
                <div class="aboutPicWrapper-front">
                    <b-img class="aboutPic" src="/img/home/Hutto_David.jpg" alt="Picture of David Hutto" fluid></b-img>
                </div>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import firebaseApp from './firebase/init.js'
import axios from 'axios'
export default {
    data() {
        return {

        }
    },
    methods: {
        downloadCV() {
            var storageRef = firebaseApp.ref();;
            var pathReference = storageRef.child('Resume.pdf');
            pathReference.getDownloadURL().then(function (url) {
                window.open(url, '_blank');
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    text-align: justify;
}

@media (max-width:991px) {
    .aboutWrapper {
        order: 2;
    }

    .aboutPic {
        order: 1;
    }
}

.aboutWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.aboutPicWrapper-back {
    transform: rotateY(180deg);
}

.aboutPicWrapper-back,
.aboutPicWrapper-front {
    position: absolute;
    bottom: 0;
    right: 0;
    backface-visibility: hidden;
    transition: all .7s ease-out;
}

.pictureFlip {
    perspective: 250rem;
    -moz-perspective: 250rem;
    position: relative;
    height: 400px;
    width: 400px;

}

.aboutPic {
    border-radius: 300px;
    height: 400px;
    -webkit-box-shadow: 0px 0px 41px -13px rgba(97, 97, 97, 0.4);
    -moz-box-shadow: 0px 0px 41px -13px rgba(97, 97, 97, 0.4);
    box-shadow: 0px 0px 41px -13px rgba(97, 97, 97, 0.4);
}

@media(max-width:640px) {

    .aboutPic,
    .pictureFlip {
        height: 300px;
        width: 300px;
    }

}

.aboutName {
    color: #292F36;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;

}

.aboutTitle {
    color: #292F36;
    font-family: 'Roboto', sans-serif;
}

.aboutPara {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

}

.sectionHeader {
    color: rgb(54, 54, 54);
    text-shadow: 2px 2px 3px rgba(145, 145, 145, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    font-size: 5em;
    font-family: 'Staatliches', cursive;
}

.aboutPageWrapper {
    margin-top: 140px !important;
}

.downloadBtn {
    transition: all .2s ease-in-out;
    color: white;
    border-radius: 5px;
    background-image: linear-gradient(to left, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
    -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
}

.downloadBtn:hover {
    transform: translateY(-4px);
    cursor: pointer;
    -webkit-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
}

.downloadBtn:active {
    transform: translateY(-1px);
    -webkit-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
}
</style>
