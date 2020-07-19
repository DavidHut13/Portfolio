<template>
<div>
     <p class="progressLabel">{{prop.label}}</p>
     <div class="progressBackground my-1">
          <div class="progress-value" :style="{width:prop.percent}"></div>
     </div>
</div>
</template>

<script>
export default {
     name: 'progressBar',
     data() {
          return {

          }
     },
     props: {
          prop: Object

     }

}
</script>

<style scoped>
.progressLabel {
     margin-bottom: 0;
     margin-left: .5rem;
     font-weight: bold;
     color: rgb(54, 54, 54);
     opacity: .75;
}

.progressBackground {
     background: rgba(240, 240, 240, 0.1);
     justify-content: flex-start;
     border-radius: 100px;
     align-items: center;
     position: relative;
     padding: 0 0px;
     display: flex;
     height: 20px;
     width: 100%;
     -webkit-box-shadow: inset 0px 0px 12px -5px rgba(186, 40, 247, 1);
     -moz-box-shadow: inset 0px 0px 12px -5px rgba(186, 40, 247, 1);
     box-shadow: inset 0px 0px 12px -5px rgba(186, 40, 247, 1);
}

.progress-value {
     animation: load 4s normal forwards;
     box-shadow: 0 10px 40px -10px #fff;
     border-radius: 100px;
     background-image: linear-gradient(to bottom, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
     height: 18px;
     -webkit-box-shadow: 0px 0px 12px -4px rgba(186, 40, 247, 1);
     -moz-box-shadow: 0px 0px 12px -4px rgba(186, 40, 247, 1);
     box-shadow: 0px 0px 12px -4px rgba(186, 40, 247, 1);
}

@keyframes load {
     0% {
          width: 0;
     }
}
</style>
