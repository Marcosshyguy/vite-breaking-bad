<script>
import axios from "axios";
import AppGrid from "./components/AppGrid.vue";
// import AppLoad from "./components/AppLoad.vue";
import AppSearch from "./components/AppSearch.vue";
import {store} from "./store";
export default{
  data(){
    return{
      store
    }
  },
  props:{

  },
  methods :{
    chooseCategory(){ 
      let question = ""
      if(this.store.categorySelected !== ""){
        question = "?category=" + this.store.categorySelected;
        console.log("dio non esiste")
      }else{
        question = "";
        console.log("dio  esiste")

      }

      axios.get(`https://www.breakingbadapi.com/api/characters${question}`).then((resp) => 
      {
          this.store.characters = resp.data;
      });
    }
  },
  components:{
    AppGrid,
    AppSearch
    // AppLoad
  },
  created(){
    this.chooseCategory();
  }
}
</script>

<template>
<h1>Breaking Bad Api</h1>
<!-- <AppLoad /> -->
<AppSearch @search="chooseCategory" />
<AppGrid />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
</style>
