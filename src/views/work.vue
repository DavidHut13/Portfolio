<template>
<div class="backgroundColor">
    <b-container fluid>
        <b-row>
            <b-col cols="4" offset="1" class="mainPageWrapper workIntro">
                <div>
                    <h1 class="mainTitle">See what I've done</h1>
                    <h3 class="subTitle">This is a little bit of text</h3>
                    <b-button size="lg" class="viewBtn mt-2" variant="none">Look now</b-button>
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
     transition: all .2s ease-in-out;
     color: white;
     border-radius: 5px;
     background-image: linear-gradient(to left, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
     -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
     -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
     box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
}

.viewBtn:hover {
     transform: translateY(-4px);
     cursor: pointer;
     -webkit-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
     -moz-box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
     box-shadow: 0px 10px 19px -8px rgba(0, 0, 0, 0.68);
}

.viewBtn:active {
     transform: translateY(-1px);
     -webkit-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
     -moz-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
     box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
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
