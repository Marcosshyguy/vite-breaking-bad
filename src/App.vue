<script>
import axios from "axios";
import AppGrid from "./components/AppGrid.vue";
import {store} from "./store";
export default{
  data(){
    return{
      store
    }
  },
  props:{

  },
  components:{
    AppGrid
  },
  created(){
    axios.get("https://www.breakingbadapi.com/api/characters").then((resp) => 
    {
        this.store.characters = resp.data;
        console.log(this.store.characters);
    });
  }
}
</script>

<template>
<h1>Breaking Bad Api</h1>
<AppGrid />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
</style>
