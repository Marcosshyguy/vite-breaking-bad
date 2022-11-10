<script>
export default{
  data(){

  },
  props:{

  }
}
</script>

<template>
<div class="card_custom">
    <img src="" alt="">
    <h5>Name</h5>
    <p>Tv series</p>
    <p>DEad or alive?</p>
</div>
</template>

<style lang="scss">
@use "../style/partials/variables.scss" as *;

.card_custom{
    width: 100%;
    text-align: center;
    background-color: $main-bg;
    color: white;
}
</style>