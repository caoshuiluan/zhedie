<template>
<div>
     <el-button type="text" @click="open3">点击打开 Message Box</el-button>
  <el-form   :model="ruleForm" ref="ruleForm" class="demo-form-inline">
  <el-form-item label="单价">
    <el-input  v-model="ruleForm.danjia" placeholder="单价"></el-input>
  </el-form-item>
  <el-form-item label="数量">
    <el-input v-model="ruleForm.shuliang" placeholder="数量"></el-input>
  </el-form-item>
  <el-form-item label="总价">
    <el-input v-model="ruleForm.zongjia" placeholder="总价"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
</div>
 
</template>

<script>
  export default {
    data(){
      return{
         ruleForm: {
          danjia: '',
          shuliang: '',
          zongjia:""
        }

      }
    },
    computed: {
      zongjia(){
       
        return this.ruleForm.zongjia= Number(this.ruleForm.danjia) * Number(this.ruleForm.shuliang)
        console.log(this.ruleForm.zongjia)

      }
        
    },
 mounted(){
this.tableDataShow=this.$route.pamas.rows
if(this.$route.pamas.rows.length){
  this.tableDataShow=this.$route.pamas.rows
}else if(this.$route.pamas.rows.length<0){
  this.tableDataShow=[]
}
  

 },
    methods: {
      onSubmit(){

      },
      open3() {
        this.$prompt('', '运单号', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputType:"textarea",
          closeOnClickModal:true,
        modal:false
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            
          });
        }).catch((err) => {
          // this.$message({
          //   type: 'info',
          //   message: '取消输入'
          // });       
        });
      }
    }
  }
</script>
<style lang="">

.el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
     height: 205px;
    font-size: inherit;
    color: #606266;
    background-color: #FFF;
    background-image: none;
    border: 1px solid #DCDFE6;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}


.el-message-box__input {
    padding-top: 0px;
}
.el-message-box__errormsg {
    color: #F56C6C; 
    font-size: 12px; 
     min-height: 18px; 
     margin-top: 2px;
     display: none
}

element.style {
}
.el-message-box {
    display: inline-block;
    width: 420px;
    padding-bottom: 10px;
    vertical-align: middle;
    background-color: #FFF;
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    font-size: 18px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    text-align: left;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius:10px ;
}
.el-button--primary {
    color: #FFF;
    background-color: red;
    border-color: red;
}
</style>