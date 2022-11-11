<script>
import { store } from '../store';

export default{  
  data(){
    return{
        store
    }
  },
  props:{

  }
}
</script>

<template>
<div class="container_custom">
    <div class="container"></div>
        <div class="input-group mb-1">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button" @click="$emit('search')">Search</button>
            </div>
            <label for="inputGroupSelect03" ></label>
            <select class="custom-select w-75" id="inputGroupSelect03">
                <option selected>Select category</option>
                <option v-for="(category,index) in store.categorysList" :value="category" :key="index">{{ category }}</option>
                
            </select>
        </div>
</div>
</template>

<style lang="scss">
@use "../style/partials/variables.scss" as *;

</style>