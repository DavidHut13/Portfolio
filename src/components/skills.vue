<template>
<b-container>
    <b-row>
        <!--======================= Front end Skill Section ==========================-->
        <b-col cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mb-5">
            <b-card class="text-center skillCard">
                <div class="circle mb-4">
                    <i class="icon fas fa-code fa-3x mt-5"></i>
                </div>
                <h4 class="skillHeader">Frontend Development</h4>
                <p class="hours">800 Hours</p>
                <b-badge pill class="skillPill mx-1 " variant="none">Vue.js</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">React</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Bootstrap</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">git</b-badge>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </b-card>
        </b-col>
        <!--====================== Graphic Design Skill Section =============================-->
        <b-col cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mb-5">
            <b-card class="text-center skillCard">
                <div class="circle mb-4">
                    <i class="icon fab fa-adobe fa-3x mt-5"></i>
                </div>
                <h4>Design</h4>
                <p class="hours">600 Hours</p>
                <b-badge pill class="skillPill mx-1" variant="none">Photoshop</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Illustrator</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Premiere Pro</b-badge>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </b-card>
        </b-col>
        <!--============================ Marketing Skill Section ==========================-->
        <b-col cols="12" md="8" offset-md="2" lg="4" offset-lg="0" class="mb-5">
            <b-card class="text-center skillCard">
                <div class="circle mb-4">
                    <i class="icon fas fa-ad fa-3x mt-5"></i>
                </div>
                <h4>Marketing</h4>
                <p class="hours">200 Hours</p>
                <b-badge pill class="skillPill mx-1" variant="none">Facebook</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Instagram</b-badge>
                <b-badge pill class="skillPill mx-1" variant="none">Google</b-badge>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </b-card>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.skillCard {
    max-height: 475px;
    border: none;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 20px -7px rgba(168, 168, 168, 1);
    -moz-box-shadow: 0px 0px 20px -7px rgba(168, 168, 168, 1);
    box-shadow: 0px 0px 20px -7px rgba(168, 168, 168, 1);
}

.circle {
    height: 100px;
    width: 100px;
    margin: auto;
    border: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}

.icon {
    position: absolute;
    top: 0;
    color: white;
}

.hours {
    color: rgb(88, 87, 87);
}

.skillPill {
    color: white;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}

.skillPill:hover {
    cursor: pointer;
    color: white;
    border-color: 4facfe;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}
</style>
