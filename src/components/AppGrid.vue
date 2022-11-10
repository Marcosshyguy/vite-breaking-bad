<script>
export default{
  data(){

  },
  props:{

  }
}
</script>

<template>
<div class="container">
    <div class="result-bar">
        <span><strong>Found  ...... Character</strong></span>
    </div>
    <div class="row row-col-4">
        
    </div>
</div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables.scss";

.result-bar{
    background-color: #212529;
    color: white;
    padding: .7rem;

        span{
            display: inline-block;
            line-height: 100%;
            vertical-align: middle;

        }
}


</style>