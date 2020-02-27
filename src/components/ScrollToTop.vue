<template>
<div>
    <div id="scroll" class="scrollTop">
      <span @click="scrollUp()">
           <i class="fas fa-angle-up"></i>
      </span>      
    </div>
</div>
</template>

<script>
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
     $('#scroll').addClass('show-scroll-to-top');   
  } else {     
     $('#scroll').removeClass('show-scroll-to-top');
  }
});
export default {
    methods: {
       scrollUp(){
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;  
       }
    }

}
</script>

<style>
/* SCROLL TOP BUTTON  */
.scrollTop{
    width: 40px;
    height: 40px;
    border-radius: 45px;
    background-color: #4aabf8;
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 9999;
    opacity: 0;
    transition: all .2s;
}
.show-scroll-to-top{
    opacity: 1;
}
.scrollTop span{
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: block;
    color: white;
    text-align: center;
}
.scrollTop i{
    font-size: 23px;
    line-height: 40px;
}
/* SCROLL TOP BUTTON END*/
</style>