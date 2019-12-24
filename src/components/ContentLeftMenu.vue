<template>
    <div class="clloapse_box">
      <el-collapse v-model="activeName" accordion class="sf_ser_content">
        <div
          v-for="item in ServiceTypeLists"
          :key="item.name"
          class="sf_server_show"
          @click="getChange(item.title)"
        >
          <el-collapse-item :title="item.title" :name="item.name">
            <div v-for="ser in item.packetLists" :key="ser.num" :path="ser.path" class="ser_list">
              <div @click="getval(ser.path,ser.service)">{{ser.service}}</div>
            </div>
          </el-collapse-item>
        </div>
      </el-collapse>
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
      activeName: "1",
      tabPosition: "left",
      ServiceTypeLists: [
        {
          title: "操作指南",
          name: "first",
          packetLists: [
            {
              service: "国际小包",
              num: "1",
              path: "/HelpAndSupport/Op.InternationalPack"
            },
            {
              service: "国际电商专递",
              num: "2",
              path: "/HelpAndSupport/Op.InternationalEco"
            },
            {
              service: "海外仓",
              num: "3",
              path: "/HelpAndSupport/Op.OverseasWarehouse"
            }
          ]
        },
        {
          title: "常见问题",
          name: "Second",
          packetLists: [
            {
              service: "国际小包",
              num: "1",
              path: "/CommonProblem/Co.InternationalPack"
            },
            {
              service: "国际电商专递",
              num: "2",
              path: "/CommonProblem/Co.InternationalEco"
            },
            {
              service: "海外仓",
              num: "3",
              path: "/CommonProblem/Co.OverseasWarehouse"
            }
          ]
        },
        {
          title: "快速引导",
          name: "Third",
          packetLists: [
            {
              service: "顺丰俄罗斯小包自助系统注册指引",
              num: "1",
              path: "/FastBoot/Registration"
            }
          ]
        }
      ]
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
    },
    getChange(title) {
      this.titleName = title;
      console.log(title);
    },
    // getval(path,service){
    //   // this.activeTitle=service
    //   // console.log(path,service)
    //     // this.$router.push(path)
    //     this.$router.push({
    //     path,
    //     query:{
    //       type:service,
    //       titleName:this.titleName
    //     }
    //   });
    // },
    getval(path, service) {
      this.$router.push({
        path,
        query: {
          type: service,
          titleName: this.titleName
        }
      });
      //   console.log(path);
      // })
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
.clloapse_box {    
    margin-left:calc(100% - 200px);
}
.sf_ser_content {
  width: 200px;
}
.ser_list {
  display: block !important;
  margin: 5px 0px 0px 20px;
}
.ser_list :hover {
  color: #e0283f;
}
/* 折叠板整体 */
.clloapse_box {
  /* position: absolute;
  left:18.5% */
}
.el-collapse-item__content {
  /* padding-bottom: 25px; */
  font-size: 13px;
  color: #303133;
  line-height: 1.769230769230769;
  margin-left: 277px;
  height: 100px !important;
  z-index: 999;
  width: 150px;
}
.sf_daohang {
  margin-left: 22%;
}
.el-collapse {
  border-top: 0px solid #ebeef5;
  border-bottom: 0px solid #ebeef5;
}
.el-collapse-item__wrap {
  will-change: height;
  background-color: #fff;
  overflow: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 0px solid #ebeef5;
}
.sf_daohang {
  margin-top: 10px;
  margin-left: 25%;
}
.el-collapse-item__header {
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
.ser_list a {
  color: #303133;
}
.el-collapse-item {
    background: #e0283f
}
.el-collapse-item__content {
  margin-bottom: 2px;
  font-size: 13px;
  color: #303133;
  line-height: 1.769230769230769;
  margin-left: 16%;
  height: 100px !important;
  z-index: -1;
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