<template>
    <b-row class="toolsWrapper">
        <b-col cols="12" class="m-4">
            <carousel :paginationEnabled="false" :scrollPerPage="false" :autoplay="true" :perPageCustom="[[960, 8], [720, 5],[350,4]]">
                <slide v-for="(icon,index) in iconArray" :key="index" class="text-center">
                    <div>
                        <b-img fluid class="skillLogo " :src="icon.src"></b-img>
                    </div>
                </slide>
            </carousel>
        </b-col>
    </b-row>
</template>


<script>
export default {
data() {
    return {
        iconArray: [{
                    name: "npm",
                    src: "/img/home/langIcons/npm-logo-red.svg"
                },
                {
                    name: "Git",
                    src: "/img/home/langIcons/Git-Logo-Black.svg"
                },
                   {
                    name: "Python",
                    src: "/img/home/langIcons/python-logo.svg"
                },
                {
                    name: "Vue",
                    src: "/img/home/langIcons/256px-Vue.js.png"
                },
                {
                    name: "Javascript",
                    src: "/img/home/langIcons/javascript.svg"
                },
                {
                    name: "HTML",
                    src: "/img/home/langIcons/HTML5_Badge_512.svg"
                },
                {
                    name: "React",
                    src: "/img/home/langIcons/react.svg"
                },
                {
                    name: "CSS",
                    src: "/img/home/langIcons/css3-logo.svg"
                },
                {
                    name: "Adobe Cloud",
                    src: "/img/home/langIcons/Creative_Cloud.svg"
                }
            ]

    }
}

}
</script>

<style>
.toolsWrapper {
    background-color: rgb(240, 240, 240);
    display: flex;
    justify-content: center;
    align-items: center;
}

.skillLogo {
    width: 3.5em;
    filter: grayscale(1) contrast(1);
}
</style>
