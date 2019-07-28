<template>
    <div class="make-bg-transparent">
        <nav class="navbar navbar-expand-lg navbar-light bg-ligh">
        <router-link class="navbar-brand" to="/"><img class="navbar-logo" src="/img/logo.png"></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                   <router-link class="nav-link" to="/"> Home <span class="sr-only">(current)</span></router-link> 
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about"> About <span class="sr-only">(current)</span></router-link> 
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    </div>
</template>
<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
    }
    
}
</script>
<style>
.navbar-logo{
    width:130px;
}
.make-bg-transparent{
    position:fixed !important;
    background:transparent !important;
}
a.nav-link{
    color:white;
}
</style>
