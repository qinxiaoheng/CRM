<template>
  <div class="header">
    <form class="header-search" action="" method="post">
      <div class="header-search-input"
          v-bind:class="{ 'is-focused' : isFocuse}"
      >
        <input id="search" type="text" name="" value="" placeholder="Search" >
      </div>
      <button type="button" name="button"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Crmheader',
  data () {
    return {
          isFocuse : true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.header{
  .header-search{
    float:right;
    .header-search-input{
      float:left;
      input{
        border: 0;
        background-image: linear-gradient(#9c27b0, #9c27b0), linear-gradient(#D2D2D2, #D2D2D2);
        background-size: 0 2px, 100% 1px;
        background-repeat: no-repeat;
        background-position: center bottom, center calc(100% - 1px);
        background-color: transparent;
        transition: background 0s ease-out;
        float: none;
        box-shadow: none;
        border-radius: 0;
        font-weight: 400;
        outline:0 none;
      }
    }
    
  }
}
</style>
