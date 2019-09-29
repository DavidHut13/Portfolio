<template>
  <div id="app">
    <navbar id="navbar" class="navWrapper"></navbar>
    <router-view/>
  </div>
</template>




<script>

// Scrolling Effect
$(window).on("scroll", function() {
  if ($(window).scrollTop() >= 300) {
    $(navbar).addClass("navbar-background");
    $(navbar).removeClass("navWrapper")
     $(navbar).addClass("navbar-background");
  } else {
    $(navbar).removeClass("navbar-background");
    $(navbar).addClass("navWrapper"); 
  }
});
if (window.addEventListener)
  window.addEventListener("DOMMouseScroll", wheel, false);
window.onmousewheel = document.onmousewheel = wheel;
function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;
}
var goUp = true;
var end = null;
var interval = null;
function handle(delta) {
  var animationInterval = 20; //lower is faster
  var scrollSpeed = 20; //lower is faster
  if (end == null) {
    end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;
  if (interval == null) {
    interval = setInterval(function() {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (
        scrollTop <= 0 ||
        scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
        (goUp && step > -1) ||
        (!goUp && step < 1)
      ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step);
    }, animationInterval);
  }
}
import Navbar from './components/Navbar.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default{
  data(){
    return{

    }
  },
  components:{
    navbar: Navbar,
  }
}
</script>
<style lang="scss">

.navbar-background{
    background:rgba(255, 255, 255, 0.815);
  -webkit-box-shadow: 0px 10px 18px -19px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 10px 18px -19px rgba(0,0,0,0.75);
  box-shadow: 0px 10px 18px -19px rgba(0,0,0,0.75);
}

.navWrapper{
  background: transparent;
}

</style>
