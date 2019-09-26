<template>
  <el-scrollbar class="el-scrollbar">
    <el-menu class="el-menu-slide">
      <el-menu-item index="1">
        <i class="el-menu-slide"></i>
        <span slot="title">首頁</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";
@Component({
  components: {}
})
export default class Sidebar extends Vue {
  @Getter("routers") getRouters: any;

  created() {
    console.log(this.getRouters);
  }
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  border-right: 1px solid #e6e6e6;
  background: #fff;
  .el-menu-slide {
    border-right: none;
    i {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
