<template>
<div class="backgroundColor">
    <b-container fluid>
        <b-row>
            <b-col cols="4" offset="1" class="mainPageWrapper workIntro">
                <div>
                    <h1 class="mainTitle">See what I've done</h1>
                    <h3 class="subTitle">This is a little bit of text</h3>
                    <b-button class="viewBtn mt-2" variant="none">Look now</b-button>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <b-container>
        <b-row class="pb-5">
            <!-- ====================== Websites =======================-->
            <b-col class="mt-5" cols="12">
                <h1 class="catagoryHeader">Websites</h1>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>

            <!--========================== Components ===================== -->
            <b-col class="mt-5" cols="12">
                <h1 class="catagoryHeader">Components</h1>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <!--========================== Components ===================== -->
            <b-col class="mt-5" cols="12">
                <h1 class="catagoryHeader">Graphic Design</h1>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="shadow">

                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
name: 'work'
export default {

}
</script>

<style scoped>
.workIntro {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}

.mainTitle {
    font-size: 4.25em;
}

.subTitle {
    font-size: 2em;
}

.backgroundColor {
    background-color: rgb(240, 240, 240);
}

.viewBtn {
    background: #F40612;
    border-color: #F40612;
    font-weight: bold;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 2px;
}

.viewBtn:hover {
    background: transparent;
    color: #F40612;
    -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.75);

}

.mainPageWrapper {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

.catagoryHeader {
    color: black;
}

.card {
    height: 400px;
}
</style>
