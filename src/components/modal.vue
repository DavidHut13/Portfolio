<template>
<b-container>
     <b-row>
          <b-col>
               <b-modal id="detailsModal" centered hide-footer hide-header>
                    <b-row>
                         <b-col cols="12" md="6">
                              <carousel :responsive="{0:{items:2},600:{items:3},900:{items:4},1100:{items:5},1300:{items:6}}" :nav="false" :items="5">
                                   
                                        <b-img @click="viewGames(game.name)" fluid class="gameThumbnail" :src="getPictureURL(game.box_art_url)"></b-img>
                                        <!-- <h5 class="gameTitle">{{game.name}}</h5> -->
                                   
                              </carousel>
                         </b-col>
                         <b-col cols="12" md="6">
                              <h4>website 1</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit adipisci earum labore laborum placeat nisi iusto inventore? Ea ex magni ratione, ipsa libero ipsum autem obcaecati officiis asperiores cupiditate.</p>
                              <b-button class="mx-3 demoBtn" variant="outline-danger">Demo</b-button>
                         </b-col>
                    </b-row>

               </b-modal>
          </b-col>
     </b-row>
</b-container>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
     name: 'detailsModal',
     data() {
          return {

          }
     },
     components: {
          carousel
     },

}
</script>

<style scoped>
.demoBtn {
     transition: all .2s ease-in-out;
     border-radius: 5px;
     border: none;
     color: white;
     padding: 5px 25px 5px 25px;
     -webkit-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
     -moz-box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
     box-shadow: 0px 10px 11px -8px rgba(0, 0, 0, 0.68);
     background: transparent;
     border: none;
     font-weight: bold;
     background-image: linear-gradient(#BA28F7 0%, #9A3CF4 100%);
}

.demoBtn:hover {
     transform: translateY(-4px);
     cursor: pointer;
}

.demoBtn:active {
     transform: translateY(-1px);
     -webkit-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
     -moz-box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
     box-shadow: 0px 10px 5px -8px rgba(0, 0, 0, 0.68);
     background-image: linear-gradient(to left, #ba28f7, #b22ef7, #aa34f6, #a238f5, #9a3cf4);
}
</style>
