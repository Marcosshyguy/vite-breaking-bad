<script>
import AppCard from './AppCard.vue';
export default{
  data(){

  },
  props:{

  },
  components:{
    AppCard
  }
}
</script>

<template>
<div class="container">
    <div class="result-bar">
        <span><strong>Found  ...... Character</strong></span>
    </div>
    <div class="row row-col-4">
        <div class="col"><AppCard /></div>
        <div class="col"><AppCard /></div>
        <div class="col"><AppCard /></div>
        <div class="col"><AppCard /></div>
        
    </div>
</div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables.scss" as *;

.result-bar{
    background-color: $result-bg;
    color: white;
    padding: .7rem;


}

.col{
    
    padding: 1em;
}

</style>