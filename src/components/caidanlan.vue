<template>
  <div class="caidanlan-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="sf_daohang">
      <el-breadcrumb-item :to="{ path: '/pages/MyHome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>帮助与支持</el-breadcrumb-item>
      <el-breadcrumb-item>{{titleName}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{typetitle}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
// import { nextTick } from 'q';
export default {
  props: {
    typetitles: {}
  },
  data() {
    return {
      typetitle: "",
      titleName: "",
      activeNum: "",
      activeTitle: "",
      show: "flase",
      tabPosition: "left",
    };
  },
  created: function() {
    this.$emit("Header", false);
  },
  methods: {
    handleChange(val) {
      console.log(val);
      let arr = [1, 2, 3, 4];
      arr.lastIndexOf();
    }
  },
  watch: {
    typetitles: {
      handler(v, vl) {
        console.log(v, vl);
        //  if(v!==vl){
        this.typetitle = v.typetitle;
        this.titleName = v.titleName;
        //  }
      },
      deep: true
    }
  }
};
</script>
<style scoped>
body {
  height: 99vh;
  overflow: auto;
}
.caidanlan-wrap {
  width: 100%;
  margin-bottom: 10px;
}
>>> .sf_daohang {
  margin-left: 22%;
}
>>> .el-collapse {
  border-top: 0px solid #ebeef5;
  border-bottom: 0px solid #ebeef5;
}
>>> .el-collapse-item__wrap {
  will-change: height;
  background-color: #fff;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 0px solid #ebeef5;
}
>>> .sf_daohang {
  margin-top: 10px;
  margin-left: 25%;
}
>>> .el-collapse-item__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 30px;
  line-height: 48px;
  background-color: #e0283f;
  color: rgb(255, 255, 255);
  cursor: pointer;
  border: 1px solid #ebeef5;
  border-top: none;
  font-size: 13px;
  font-weight: 500;
  -webkit-transition: border-bottom-color 0.3s;
  transition: border-bottom-color 0.3s;
  outline: 0;
  width: 150px;
  margin-left: 16%;
  border-top: 1px solid #ebeef5;
  border-radius: 5px;
  text-align: center;
  text-indent: 1em;
  margin-top: 5px;
  z-index: 3;
}
.service_img {
  margin-left: 300px;
  margin-top: 10px;
  border-radius: 5px;
}
.box_title {
  width: 146px;
  border: 1px solid #ebeef5;
  margin-left: 24%;
  height: 100%;
}
</style>
<style>
</style>