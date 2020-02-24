<template>
<b-container class="color" fluid>
    <b-row>
        <b-col cols="6" md="4" offset-md="2" class="mt-5">
            <h3>David Hutto</h3>
            <p class="my-2"> <i class="far fa-envelope-open"></i> dhutto_11@live.com</p>
            <p><i class="fas fa-phone"></i> 682-559-2836</p>
        </b-col>
        <!-- <b-col>
            <h4>Links</h4>
            <i class="socialIcon fab fa-facebook-square fa-3x mx-2"></i>
            <i class="socialIcon fab fa-linkedin fa-3x mx-2"></i>
            <i class="socialIcon fab fa-github-square fa-3x mx-2"></i>
        </b-col> -->
        <b-col cols="6" class="mt-5 mb-4">
            <h3 class="mb-1">Links</h3>
            <b-row>
                <b-col cols="12" md="6">
                    <b-link class="customLink" target="_blank" href="https://www.facebook.com/david.hutto.9?ref=bookmarks">
                        <p class="m-1">Facebook</p>
                    </b-link>
                    <b-link class="customLink" href="https://www.linkedin.com/in/david-hutto-5a7b19139/" target="_blank">
                        <p class="m-1">Linkden</p>
                    </b-link>
                </b-col>
                <b-col cols="12" md="6">
                    <b-link class="customLink" href="https://github.com/DavidHut13" target="_blank">
                        <p class="m-1">Github</p>
                    </b-link>
                    <b-link class="customLink" href="https://codepen.io/David_Hutt" target="_blank">
                        <p class="m-1">Code Pen</p>
                    </b-link>
                </b-col>
            </b-row>
        </b-col>
        <b-col cols="12" class="vueBadgeWrapper">
            <b-button variant="none" size="sm" href="https://vuejs.org/" target="_blank" class="m-1 vueBadge py-0 px" pill>made with <b-img class="vueLogo" src="/img/home/langIcons/256px-Vue.js_Logo_2.svg.png"></b-img>
            </b-button>
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
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
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
    background-clip: text;
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

.vueBadge {
    color: black;
    background: white;
}

.vueBadge:hover {
    -webkit-box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 17px -7px rgba(0, 0, 0, 0.75);
    cursor: pointer;
}
.customLink{
    color:white;
    font-weight: bold;
    text-decoration: none;
}
.customLink:hover{
    color:black;
}
</style>
