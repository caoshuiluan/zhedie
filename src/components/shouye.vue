<template>
  <div class="content-wrap">
    <!-- //引入的菜单栏 -->
    <caidanlan  :typetitles="obj"></caidanlan >
<!-- 
   下面部分未右边显示部分 -->
   <div class='conent-box'>

     <div class='content-left-part'>
       <ContentLeftMenu />
     </div>
     <div class='content-right-part'>
        <div class="content_right">
          <div class="head">
            <div class="head_left">
              <a href>国际电商专递</a>
            </div>
            <div class="head_right"></div>
          </div>
          <div :class="dakai?'dakai':''" class="getCont" @click="dakai1" style="margin-top:20px">
            <div v-show="dakai">
              <div class="changfangxing" style="width:190px">
                <div>
                  <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp什么是国际电商专递？</label>
                </div>
              </div>
              <div class="box1">
                <div
                  class="ser_intro"
                >为跨境电商卖家销售较高价值商品应配套更加优质高效物流服务的需求而量身定制的跨境物流专线服务。具有阳光清关、时效稳定、全程可跟踪的优势。</div>
              </div>
            </div>
            <div class="box2" v-show="!dakai">
              <div class="changfangxing" style="width:180px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp什么是国际电商专递？</label>
                </div>
              </div>
            </div>
          </div>

          <div :class="open?'open':''" class="getCont" @click="dakai2" style="margin-top:20px">
            <div v-show="open">
              <div class="changfangxing" style="width:230px">
                <div>
                  <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label style="font-size:14px; color:white; ">&nbsp&nbsp国际电商专递的服务范围？</label>
                </div>
              </div>
              <div class="box3">
                <p class="ser_intro">中国内地出口至俄罗斯、乌克兰流向。</p >
              </div>
            </div>
            <div class="box2" v-show="!open">
              <div class="changfangxing" style="width:230px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递的服务范围？</label>
                </div>
              </div>
            </div>
          </div>

          <div :class="open1?'open1':''" class="getCont" @click="dakai3" style="margin-top:20px">
            <div v-show="open1">
              <div class="changfangxing" style="width:300px">
                <div>
                  <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递的计费方式是怎么样的？</label>
                </div>
              </div>
              <div class="box4">
                <p class="ser_intro">俄罗斯、乌克兰单票单件计费；首重100g，续重按100g计费；计费重量：实重材积取其大者计费。</p >
              </div>
            </div>
            <div class="box2" v-show="!open1">
              <div class="changfangxing" style="width:300px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递的计费方式是怎么样的？</label>
                </div>
              </div>
            </div>
          </div>

          <div :class="open2?'open2':''" class="getCont" @click="dakai4" style="margin-top:20px">
            <div v-show="open2">
              <div class="changfangxing" style="width:230px">
                <div>
                  <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递如何下单呢？</label>
                </div>
              </div>
              <div class="box5">
                <p class="ser_intro">您在备好货之后，可以通过以下方式交给顺丰：</p >
                <ul>
                  <li>1)&nbsp客户通过自有系统与顺丰对接下单（API系统对接），并按要求打印运单（标签）； 客户登录顺丰国际小包平台后台完成自助下单，并按要求在客户端打印求打印运单（标签）；</li>
                  <li>2)&nbsp客户使用第三方发件系统（普源网店精灵、马帮ERP、全球交易助手、赛兔等）完成自助下单，并按照要求打印运单（标签）；</li>
                </ul>
              </div>
            </div>
            <div class="box2" v-show="!open2">
              <div class="changfangxing" style="width:230px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递如何下单呢？</label>
                </div>
              </div>
            </div>
          </div>
          
          <div :class="open3?'open3':''" class="getCont" @click="dakai5" style="margin-top:20px">   
            <div v-show="open3">
              <div class="changfangxing" style="width:230px">
                <div>
                <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递如何收件？</label>
                </div>
              </div>
              <div class="box6">
                <p class="ser_intro">您在备好货之后，可以通过以下方式交给顺丰国际：</p >
                <ul>
                    <li>1)&nbsp 收派员上门收件：您可致电“95338”我们将通知收派员上门收件；</li>
                    <li>2)&nbsp 司机上门提货：针对发货量较大的客户，我们将安排司机上门提货;</li>
                </ul>
              </div>
            </div>
            <div class="box2" v-show="!open3">
              <div class="changfangxing" style="width:230px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递如何收件？</label>
                </div>
              </div>
            </div>
          </div>

          <div :class="open4?'open4':''" class="getCont" @click="dakai6" style="margin-top:20px">
            <div v-show="open4">
              <div class="changfangxing" style="width:200px">
                <div>
                <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递的时效？</label>
                </div>
              </div>
              <div class="box7">
                <p class="ser_intro">国际小包仅能发运内置锂电池，不接受充电宝或纯电池件，同时您需提供MSDS证明、UN38.3测试报告、寄货人声明（电池保函）三份文件。</p >
                <ul>
                    <li>● &nbsp 乌克兰：7-10个工作日；</li>
                    <li>● &nbsp 俄罗斯：10-15个工作日；</li>
                    <li>● &nbsp 以上均为参考时效，且均不含收集护照信息和海关延误。</li>
                </ul>
              </div>
            </div>
            <div class="box2" v-show="!open4">
              <div class="changfangxing" style="width:200px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递的时效？</label>
                </div>
              </div>
            </div>
          </div>
          
          <div :class="open5?'open5':''" class="getCont" @click="dakai7" style="margin-top:20px">
            <div v-show="open5">
              <div class="changfangxing" style="width:350px">
                <div>
                <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递的寄件人为什么一定要为公司？</label>
                </div>
              </div>
              <div class="box8">
                <p class="ser_intro">顺丰国际电商专递采用的B2C的清关模式，因此寄件方一定要为B端客户，即为公司。</p >
              </div>
            </div>
            <div class="box2" v-show="!open5">
              <div class="changfangxing" style="width:350px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递的寄件人为什么一定要为公司？</label>
                </div>
              </div>
            </div>
          </div>
          
          <div :class="open6?'open6':''" class="getCont" @click="dakai8" style="margin-top:20px">
            <div v-show="open6">
              <div class="changfangxing" style="width:550px">
                <div>
                <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递（俄罗斯流向）为什么要提供商品销售链接、收方护照信息？</label>
                </div>
              </div>
              <div class="box9">
                <p class="ser_intro">提供销售链接是海关为了核实该物品为客户自用，且申报信息与销售链接相符，护照信息是基于俄罗斯联邦法律和海关联盟规定做出的。</p >
              </div>
            </div>
            <div class="box2" v-show="!open6">
              <div class="changfangxing" style="width:550px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商专递（俄罗斯流向）为什么要提供商品销售链接、收方护照信息？</label>
                </div>
              </div>
            </div>
          </div>

          <div :class="open7?'open7':''" class="getCont" @click="dakai9" style="margin-top:20px">
            <div v-show="open7">
              <div class="changfangxing" style="width:260px">
                <div>
                  <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商的专递申报要求如何？</label>
                </div>
              </div>
              <div class="box9">
                <p class="ser_intro">货件品名和货件价值需如实申报。正确申报品名，不接受申报品名为Other或Gift，Accessories等较模糊的品名，如果申报比较模糊，可能会造成目的清关不成功从而产生退件，以及后续查询索赔不成功。</p >
              </div>
            </div>
            <div class="box2" v-show="!open7">
              <div class="changfangxing" style="width:260px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white">&nbsp&nbsp国际电商的专递申报要求如何？</label>
                </div>
              </div>
            </div>
          </div>
          <div :class="open8?'open8':''" class="getCont" @click="dakai10" style="margin-top:20px">
            <div v-show="open8">
              <div class="changfangxing" style="width:280px">
                <div>
                  <img src="../assets/jianhaobai.png" alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white; margin-top:5px">&nbsp&nbsp国际电商专递是否可以寄送电池？</label>
                </div>
              </div>
              <div class="box9">
                <p class="ser_intro">只能发运内置锂电池，不接受充电宝或纯电池件，同时需您提供MSDS证明、UN38.3测试报告、寄货人声明（电池保函）三份文件。</p >
              </div>
            </div>
            <div class="box2" v-show="!open8">
              <div class="changfangxing" style="width:280px">
                <div>
                  <img src="../assets/jiahaobai.png"  alt class="jiajian_img" />
                  <label for style="font-size:14px; color:white; margin-top:5px">&nbsp&nbsp国际电商专递是否可以寄送电池？</label>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    
  </div>
   <MyFooter/>
  </div>
</template>
<script>
import caidanlan from "@/components/caidanlan.vue";
import MyFooter from '@/components/pages/MyFooter';
import ContentLeftMenu from '@/components/ContentLeftMenu';
export default {
  components: {
    caidanlan,
      MyFooter,
      ContentLeftMenu
  },
  data() {
    return {
      dakai: true,
      open: true,
      open1: true,
      open2: true,
      open3: true,
      open4: true,
      open5: true,
      open6: true,
      open7: true,
      open8: true,
      open9: true,
        obj:{
        titleName:"",
        typetitle:'',
      },
    };
  },
  created:function () {
            this.$emit('Header', false);
        },
 mounted(){
    this.obj.titleName=this.$route.query.titleName?this.$route.query.titleName:'';
    console.log(this.activeNum,'this.activeNum')
    this.obj.typetitle = this.$route.query.type?this.$route.query.type:'';
    console.log(this.obj,'this.$router.');
  },
  methods: {
    dakai1() {
      this.dakai = !this.dakai;
    },
    dakai2() {
      this.open = !this.open;
    },
    dakai3() {
      this.open1 = !this.open1;
    },
    dakai4() {
      this.open2 = !this.open2;
    },
    dakai5() {
      this.open3 = !this.open3;
    },
    dakai6() {
      this.open4 = !this.open4;
    },
    dakai7() {
      this.open5 = !this.open5;
    },
    dakai8() {
      this.open6 = !this.open6;
    },
    dakai9() {
      this.open7 = !this.open7;
    },
     dakai10() {
      this.open = !this.open8;
    }
  }
};
</script>
<style scoped>
html,body,#app {
  width: 100%!important;
  height:100px!important;
  overflow: auto;
  font-family: "Microsoft YaHei", 微软雅黑, verdana, sans-serif;
  /* background-color: rgb(248, 248, 248); */
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
}
.content-wrap {
  width: 1450px;
}
.conent-box {
  font-size: 0;
}
.content-left-part {
    width: 30%;
    display: inline-block;
    vertical-align: top;
    font-size: 12px;
}
.content-right-part {
    display: inline-block;
    width: 70%;
    font-size: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.content_right {
    /* position: relative;
    top: -100px;
    left: 27.5%; */
    /* top: 268px; */
    /* left: 28.5%; */
    /* width: 778px; */
    /* margin-left: 20px; */
    border: 1px #ddd solid;
    /* background-color: rgb(204, 194, 194); */
    /* margin-bottom: 20px; */

}
.small_title {
  margin-left: 20px;
  font-family: "Microsoft YaHei", 微软雅黑, verdana, sans-serif;
  color: #333;
  font-size: 14px;
}
.sanjiaoxing {
  margin-left: 20px;
}
ul li {
  list-style: none;
  display: block;
  text-align: left;
  margin-left: 10px;
  font-family: "Microsoft YaHei", 微软雅黑, verdana, sans-serif;
  color: #333;
  font-size: 14px;
}
.box1,
.box3,
.box4,
.box5,
.box6,
.box7,
.box8,
.box9,
.box10 {
  width: 700px;
  height: 100%;
  background: #fff;
  margin: 10px 0 20px 20px;
  font-family: "Microsoft YaHei", 微软雅黑, verdana, sans-serif;
  font-size: 14px;
  /* padding:10px; */
}
.box2 {
  margin-bottom: 30px;
}
.ser_intro {
  width: 700px;
  /* height: 100px; */
  line-height: 100px;
  font-family: "Microsoft YaHei", 微软雅黑, verdana, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #333;
  margin: 10px 0px 0px 20px;
  text-align: left;
  /* position: absolute;
  top: 106px;
  left: 30px; */
}
.ser_intro1 {
  font-family: "Microsoft YaHei", 微软雅黑, verdana, sans-serif;
  font-size: 14px;
  margin-left: 30px;
}
/* 内容折叠板2*/
/* .box3 {
  width: 700px;
  height: 100%;
  background: #fff;
}
.box3_info {
  margin-top: 10px;
} */
.changfangxing {
  width: 260px;
  height: 52px;
  background: #e0283f;
  border-radius: 0px 20px 1px 0px;
  margin-left: 20px;
}
.jiajian_img {
    margin-left: 6px;
    margin-top: 6px;
    vertical-align: baseline;
}
.head {
  display: inline-block;
  overflow: hidden;
}
.head_left {
  float: left;
  width: 120px;
  height: 40px;
  line-height: 40px;
  margin-left: -1px;
  border-top: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  /* padding: 10px 20px; */
  color: #e0283f;
  border-top: 2px solid #e0283f;
  text-align: center;
}
.head_right {
  width: 658.9px;
  height: 40px;
  background-color: #ddd;
  border: 0px 0px 1px 1px solid #ddd;
  float: left;
}
a {
  color: #e0283f;
  text-decoration: none;
}
</style>
<style>
 
  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    font-weight: 700;
    text-decoration: none;
    -webkit-transition: color .2s cubic-bezier(.645,.045,.355,1);
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: rgb(32, 98, 197);
}
</style>