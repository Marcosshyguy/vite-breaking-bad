<script>
import axios from "axios";
import AppGrid from "./components/AppGrid.vue";
import AppLoad from "./components/AppLoad.vue";
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
      this.store.loadingFlag = true;
      let question = ""
      if(this.store.categorySelected !== ""){
        question = "?category=" + this.store.categorySelected;
      }else{
        question = "";

      }

      axios.get(`https://www.breakingbadapi.com/api/characters${question}`).then((resp) => 
      {
          this.store.characters = resp.data;
      }).catch(error => {this.store.characters = [] })
      .finally(() => {
        this.store.loadingFlag= false;
      });
      
    }
  },
  components:{
    AppGrid,
    AppSearch,
    AppLoad
  },
  created(){
    this.chooseCategory();
  }
}
</script>

<template>
<h1>Breaking Bad Api</h1>
<AppSearch @search="chooseCategory" />
<AppLoad v-if="store.loadingFlag" />
<AppGrid v-else />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');

</style>
