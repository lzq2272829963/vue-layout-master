<template>
  <div class="attribute-input">
   <div class="attribute-input-left">
     <label style="font-size:14px;">{{label}}</label>
   </div>
   <div class="attribute-input-right">
   <el-input v-model="val" v-if='!menu||menu.length==0' size="mini" style="width:100%;" @change="handleChange"></el-input>
   <el-select v-model="val" v-else='menu.length>0' size="mini" style="width:100%;" @change="handleChange">
     <el-option v-for="(item,key) in menu" :key="key" :label="item" :value="item"></el-option>
   </el-select>
   </div>
  </div>
</template>
<script>
 export default{
   name:'attributeInput',
   props:{
     label:String,
     value:[String,Number],
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
  .attribute-input{
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    align-items:center;
    justify-content:space-between;
  }
  .attribute-input-left{
    margin-right:10px;
    flex:1;
  }
  .attribute-input-right{
    flex:2;
  }
</style>