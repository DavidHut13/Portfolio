<template>
<b-container class="color" fluid>
    <b-row>
        <b-col  offset="3" class="mb-3">
            <h3>David Hutto</h3>
            <h5> <i class="far fa-envelope-open"></i> dhutto_11@live.com</h5>
            <h5><i class="fas fa-phone"></i> 682-559-2836</h5>
        </b-col>
         <b-col>
            <i class="socialIcon fab fa-facebook-square fa-3x mx-2"></i>
            <i class="socialIcon fab fa-linkedin fa-3x mx-2"></i>
            <i class="socialIcon fab fa-github-square fa-3x mx-2"></i>
        </b-col>
    </b-row>
</b-container>


</template>

<script>
export default {
    name: "footer",
    data(){
        return{

        }
    }
}
</script>

<style>
.color{
    color:white;
    background-color:black;
}

.socialIcon:hover{
 background-image: -webkit-linear-gradient( #266ed8, #009aff, #00beea, #00d99f, #1feb28);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>