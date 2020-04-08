<template>
  <div id="app">
    <Map3D ref="map" :class="{toolBottom:!isShowBottom,toolRight:!isShowRight}"></Map3D>
    <router-view/>
  </div>
</template>
<script>
  import Map3D from './views/Map3D.vue'
  export  default {
    components:{
      Map3D,
    },
    data(){
      return{
        isShowBottom:true,
        isShowRight:true
      }
    }
  }
</script>
<style lang="scss">
  @import "assets/css/common.css";
  @import "assets/css/font.css";
  @import "assets/css/public.scss";
  @import "assets/css/gis.css";
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    position: absolute;
    min-width: 1920px;
    min-height: 1080px;
    width: 1920px;
    height: 100%;
    overflow:hidden;
    // background: #ccc;
}
</style>
