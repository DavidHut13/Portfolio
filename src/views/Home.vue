<template>
<b-container class="bg-color" fluid>
    <b-row>
        <b-col class="homepage_background">
            <div class="flexCenter">
                <h1 class="slogan text-center">Be Bold.</h1>
            </div>

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
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    background-image: url(/img/AdobeStock_275693862.jpeg);
}

.bg-color {
    background: black;

}


.slogan {
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font: bold 100px Impact, Sans-Serif;
    color: white;
    font-size: 12em;
}

.content {
    height: 800px;
}
</style>
