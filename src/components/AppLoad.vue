<script>
export default{
  data(){

  }
}
</script>

<template>
    <div class="container_custom">
      <div class="loading">
            <span><i class="fa-solid fa-gun"></i></span>  
      </div>
    </div>
</template>

<style lang="scss">
@use "../style/partials/variables.scss" as *;

.loading{
    margin: 0 auto;
    width: 80px;
    height: 80px;

    position: relative;
    
    span{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
        i{
          transform: scale(1.9);
          animation-name: rotate;
          animation-duration: 1s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
      }
    }
  }
  

@keyframes rotate {
    0%   {transform: rotate(0deg);}
    25%  {transform: rotate(90deg);}
    50%  {transform: rotate(180deg);}
    75%  {transform: rotate(270deg);}
    100% {transform: rotate(360deg);}
  }

</style>