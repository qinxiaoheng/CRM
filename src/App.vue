<template>
  <div id="app">
    <el-container>
    <el-aside width="260px">
      <crm-left></crm-left>
      <div class="aside-background">
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <crm-header></crm-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import Crmleft from '@/components/left'
import Crmheader from '@/components/header'
export default {
  name: 'app',
  components : {
    "crm-left" : Crmleft,
    "crm-header" : Crmheader
  }
}
</script>

<style>
.el-header {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: red;
    opacity: 0.8;
    color:#fff;
    text-align: center;
    position: relative;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
html,body,#app,.el-aside{
  height:100%;
}
  #app > .el-container {
    height:100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .aside-background{
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-image: url('./assets/img/sidebar-1.jpg');
    z-index:-1;
    background-size: cover;
    background-position: center center;
  }
</style>
