<template>
<b-container>
    <b-row class="mt-5 aboutPageWrapper">
        <b-col cols="12" class="aboutHeader">
            <h1 class="sectionHeader">A little About Me</h1>
        </b-col>
        <b-col cols="12" md="10" offset-md="1" lg="6" offset-lg="0" class="aboutWrapper">
            <div>
                <h1 data-aos="fade-right" class="aboutName">David Hutto</h1>
                <h3 data-aos="fade-right" class="aboutTitle "> Web Developer & Designer</h3>
                <p data-aos="fade-right" data-aos-delay="100" class="aboutPara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <b-button size="lg" class="downloadBtn" variant="none">Download CV</b-button>
            </div>
        </b-col>
        <b-col cols="12" lg="6" class="aboutPic">
            <b-img data-aos="fade-left" class="profileImg" src="/img/home/Hutto_David_DFW_Web Maintenance_500.jpg" fluid></b-img>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (max-width:992px) {
    .aboutWrapper {
        order: 2;
    }

    .aboutPic {
        order: 1;
    }
}

.aboutWrapper,
.aboutPic {
    display: flex;
    justify-content: center;
    align-items: center
}

.aboutName {
    color: #292F36;
    font-weight:bold;
}
.aboutTitle {

}
.aboutPara{
    font-family: 'Raleway'; 
    font-weight:400;
}

.profileImg {
    border-radius: 300px;
    max-height: 450px;
  -webkit-box-shadow: 0px 0px 34px -19px rgba(105,105,105,1);
-moz-box-shadow: 0px 0px 34px -19px rgba(105,105,105,1);
box-shadow: 0px 0px 34px -19px rgba(105,105,105,1);
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

.aboutPageWrapper {
    margin-top: 140px !important;
}

.downloadBtn {
    transition: all .2s ease-in-out;
    color: white;
    border: #4facfe;
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
    -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
}
</style>
