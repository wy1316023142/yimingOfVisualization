<template>
<div>
  <div class="title-cont">
         <p>{{titleName}}</p>
      </div>
</div>
</template>
<script>
export default{
    props:{
        titleName:{
            default:"标题"
        }
    },
   data(){
       return{}
   }
}
</script>
<style lang="scss" scoped>
.title-cont{
    width: 299px;
    height: 38px;
    margin: 0 auto;
    background: url('../assets/img/title-bg.png') no-repeat;
    cursor: pointer;
    p{
        font-family: MicrosoftYaHei;
        font-size: 20px;
        font-weight: bold;
        color: #ffffff;
       
        padding: 6px 0;
        box-sizing: border-box;
        text-align: center;
    }
}
</style>