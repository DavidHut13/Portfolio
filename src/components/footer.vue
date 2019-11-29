<template>
<b-container class="color" fluid>
    <b-row>
        <b-col cols="4" offset="3" class="mb-3">
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
        <b-col >
              <h4>Links</h4>
            <b-row>
                <b-col cols="2">
                    <p class="m-1">Facebook</p>
                    <p class="m-1">Linkden</p>
                </b-col>
                <b-col cols="2">
                    <p class="m-1">Github</p>
                    <p class="m-1">code Pen</p>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: "footer",
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.color {
    color: black;
    background-color: white;
}

.socialIcon:hover {

    background-image: -webkit-linear-gradient(#266ed8, #009aff, #00beea, #00d99f, #1feb28);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.socialIcon {
    color: black;
}
</style>
