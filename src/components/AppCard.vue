<script>
export default{
  data(){

  },
  props:{
    character:Object
  }
}
</script>

<template>
<div class="card_custom">
    <img :src="character.img" :alt="character.name">
    <h5>{{character.name}}</h5>
    <p>{{character.category}}</p>
    <p>{{character.status}}</p>
</div>
</template>

<style lang="scss">
@use "../style/partials/variables.scss" as *;

.card_custom{
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: $main-bg;
    color: white;
}
</style>