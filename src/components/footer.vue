<template>
<b-container class="color" fluid>
    <b-row>
        <b-col cols="4" offset="3" class="mt-5">
            <h3>David Hutto</h3>
            <h5> <i class="far fa-envelope-open"></i> dhutto_11@live.com</h5>
            <h5><i class="fas fa-phone"></i> 682-559-2836</h5>
        </b-col>
        <!-- <b-col>
            <h4>Links</h4>
            <i class="socialIcon fab fa-facebook-square fa-3x mx-2"></i>
            <i class="socialIcon fab fa-linkedin fa-3x mx-2"></i>
            <i class="socialIcon fab fa-github-square fa-3x mx-2"></i>
        </b-col> -->
        <b-col class="mt-5 mb-4">
            <h4>Links</h4>
            <b-row>
                <b-col cols="3">
                    <p class="m-1">Facebook</p>
                    <p class="m-1">Linkden</p>
                </b-col>
                <b-col cols="3">
                    <p class="m-1">Github</p>
                    <p class="m-1">code Pen</p>
                </b-col>
                <b-col cols="3" class="vueBadgeWrapper pr-0">
                    <b-button variant="none" size="sm" href="https://vuejs.org/" target="_blank" class="m-1 vueBadge py-0 px" pill >made with <b-img class="vueLogo" src="/img/home/langIcons/256px-Vue.js_Logo_2.svg.png"></b-img>
                    </b-button>
                </b-col>
            </b-row>
        </b-col>

    </b-row>
</b-container>
</template>

<script>
export default {
    name: "appFooter",
    data() {
        return {

        }
    },
}
</script>

<style scoped>
.color {
    color: white;
    background-color: #4facfe;
}

.vueLogo {
    height: 1em;
}

.testing:hover {
    color: red;
}

::v-deep .madeWithVue {
    color: white;
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.socialIcon:hover {

    background-image: -webkit-linear-gradient(#266ed8, #009aff, #00beea, #00d99f, #1feb28);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.socialIcon {
    color: black;
}

.vueBadgeWrapper {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
.vueBadge{
  color:black;
  background:white;
}

.vueBadge:hover {
    -webkit-box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 0.75);
    cursor:pointer;
}
</style>
