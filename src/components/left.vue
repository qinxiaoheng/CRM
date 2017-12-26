<template>
    <el-col>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#fff"
      background-color="red"
      text-color="#fff"
      router="true"
      unique-opened="true">
      <el-submenu index="1">
        <template slot="title" text-color="#fff">
          <i class="el-icon-menu"></i>
          <span>首页</span>
        </template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title" text-color="#fff">
          <i class="el-icon-message"></i>
          <span>消息提醒</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">消息提醒</el-menu-item>
          <el-menu-item index="2-2">消息管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-mobile-phone"></i>
          <span>客户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">高级搜索</el-menu-item>
          <el-menu-item index="3-2">所有业务管理</el-menu-item>
          <el-menu-item index="3-3">申请管理</el-menu-item>
          <el-menu-item index="3-4">签证管理</el-menu-item>
          <el-menu-item index="3-5">认证管理</el-menu-item>
          <el-menu-item index="3-6">其他业务</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>新增业务</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">申请</el-menu-item>
          <el-submenu index="4-2">
            <template slot="title">签证</template>
            <el-menu-item index="4-2-1">T4中国</el-menu-item>
            <el-menu-item index="4-2-2">T4英国</el-menu-item>
            <el-menu-item index="4-2-3">访问及短期学生签证</el-menu-item>
            <el-menu-item index="4-2-4">补办BRP</el-menu-item>
          </el-submenu>
          <el-submenu index="4-3">
            <template slot="title">认证</template>
            <el-menu-item index="4-3-1">归国留学人员证明</el-menu-item>
            <el-menu-item index="4-3-2">国外学位学历认证书</el-menu-item>
          </el-submenu>
          <el-submenu index="4-4">
            <template slot="title">其他</template>
            <el-menu-item index="4-4-1">校内上诉</el-menu-item>
            <el-menu-item index="4-4-2">CAS追踪</el-menu-item>
            <el-menu-item index="4-4-3">校内住宿申请</el-menu-item>
          </el-submenu>
          <el-menu-item index="4-5">草稿箱</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-share"></i>
          <span>统计分析</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">业务类型数量统计</el-menu-item>
          <el-menu-item index="5-2">客户业务数量统计</el-menu-item>
          <el-menu-item index="5-3">客户地区分布统计</el-menu-item>
          <el-menu-item index="5-4">在读学校统计</el-menu-item>
          <el-menu-item index="5-5">得知时代教育途径统计分析</el-menu-item>
          <el-menu-item index="5-6">申请课程的等级统计</el-menu-item>
          <el-menu-item index="5-7">学校入学量统计</el-menu-item>
          <el-menu-item index="5-8">认证学校统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">用户管理</el-menu-item>
          <el-menu-item index="6-2">权限管理</el-menu-item>
          <el-menu-item index="6-3">字典数据管理</el-menu-item>
          <el-menu-item index="6-4">学校列表配置</el-menu-item>
          <el-menu-item index="6-5">调整业务分配</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>

  </el-col>
</template>

<script>
export default {
  name: 'Crmleft',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-col{
  background-color: red;
  opacity: 0.77;
  height:100%;
  .el-menu{
    background-color: red;
    height:100%;
    color:#fff;
    .el-submenu{
      span,i{
        color:#fff;
      }
      .el-submenu__title:hover{
        background-color: #fff;
      }
    }
  }
}
li{width:230px;margin:0 auto;}
.ele-menu-item{
  text-align: left;
}
.ele-menu-item.is-active{
}
</style>
