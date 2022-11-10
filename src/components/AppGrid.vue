<script>
import {store} from "../store";
import AppCard from './AppCard.vue';

export default{
  data(){
    return {
        store
    }
  },
  props:{

  },
  components:{
    AppCard
  }
  
}
</script>

<template>
<div class="container_custom">
    <div class="result-bar">
        <span><strong>Found  {{store.characters.length}} Character</strong></span>
    </div>
    <div class="container mt-3">
        <div class="row g-2" >
            <div class="col-3 " v-for="(person, index) in store.characters" key="index">
                <AppCard :character="person" />
            </div>
        </div>
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
        height: 350px;
    }


</style>