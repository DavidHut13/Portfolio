<template>
<div class="homepage_background">
    <div class="container-fluid">
        <div class="center-content">
            <h1 class="slogan text-center">Stand out.</h1>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'home',

}
</script>

<style>
.homepage_background {
    background: url("/img/vlad-busuioc-xyPxcqh8Tt8-unsplash.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items:center;
}


.slogan{
    color:white;
    font-size:70px;
}
</style>
