<template>
<b-container class="bg-color" fluid>
    <b-row>
        <b-col class="homepage_background">
            <h1 class="slogan text-center">Stand out.</h1>
        </b-col>
    </b-row>
    <b-row>
        <b-col class="mt-5 content">
            <h3>content</h3>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'home',

}
</script>

<style scoped>
.homepage_background {
    color: white;
    align-items: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    /* overrides color with nothingness */
    -webkit-text-fill-color: transparent;
    height: 100vh;
    /* remember non WebKit browsers will see all of this EXCEPT the text */
    background: url(/img/vlad-busuioc-xyPxcqh8Tt8-unsplash.jpg) no-repeat;
    /* the magic */
    -webkit-background-clip: text;
}

.bg-color{
    background:black;
    
}

.slogan{
    font: bold 100px Impact, Sans-Serif; 
    color: white;
    font-size: 170px;
}

.content {
    height: 800px;
}
</style>
