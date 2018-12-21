<template>
  <div class="attribute-radio">
   <div class="attribute-radio-left">
     <label style="font-size:14px;">{{label}}</label>
   </div>
   <div class="attribute-radio-right" @change="handleChange">
     <el-radio-group v-model="val">
      <el-radio :label=true >是</el-radio>
      <el-radio :label=false >否</el-radio>
    </el-radio-group>
   </div>
  </div>
</template>
<script>
 export default{
   name:'attributeRadio',
   props:{
     label:String,
     value:[String,Number,Boolean],
     menu:Array,
     keyName:String
   },
   computed:{
     val:{
       get:function(){
         return this.value
       },
       set:function(val){
         this.$emit('input',val);
       }
     }
   },
   methods:{
     handleChange:function(){
       this.$emit('change',this.keyName)
     }
   }
 }
</script>
<style>
  .attribute-radio{
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    align-items:center;
    justify-content:space-between;
  }
  .attribute-radio-left{
    margin-right:10px;
    flex:1;
  }
  .attribute-radio-right{
    flex:2;
  }
  .attribute-radio-right .el-radio__label{
    font-size:12px;
  }
</style>