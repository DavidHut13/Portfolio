<template>
<b-container class="color" fluid>
    <b-row>
        <b-col cols="6" md="4" offset-md="2" class="mt-5">
            <h3>David Hutto</h3>
            <p class="my-2"><i class="fas fa-envelope-open mr-1"></i>dhutto_11@live.com</p>
            <p><i class="fas fa-phone mr-1"></i>682-559-2836</p>
        </b-col>
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
        <b-col cols="12" class="vueBadgeWrapper text-center">
            <b-button variant="none" size="sm" href="https://vuejs.org/" target="_blank" class=" vueBadge py-0 my-3" pill>made with <b-img class="vueLogo" alt="Vue.js Framework" src="/img/home/langIcons/256px-Vue.js.png"></b-img>
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
    background:#9a3cf4;
}

.vueLogo {
    height: 1em;
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




.vueBadge {
    transition: all .2s ease-in-out;
    color: black;
    background: white;
    border-radius: 5px;
    -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
}

.vueBadge:hover {
    transform: translateY(-4px);
    cursor: pointer;
    -webkit-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
}

.vueBadge:active {
    transform: translateY(-1px);
    -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
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
