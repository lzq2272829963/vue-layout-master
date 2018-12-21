<template>
  <div>
    <div class="attribute-number">
	   <div class="attribute-number-left">
	     <label style="font-size:14px;">{{label}}</label>
	   </div>
	   <div class="attribute-number-right">
	   <el-input-number v-model="val" controls-position="right" :min="min" :max="max" @change="handleChange" style="width:100%;" size="mini"></el-input-number>
	   </div>
	</div>
  </div>
</template>
<script>
 export default{
   name:'attributeInput',
   props:{
     label:String,
     value:Number,
     keyName:String,
     min:Number,
     max:Number
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
  .attribute-number{
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    align-items:center;
    justify-content:space-between;
  }
  .attribute-number-left{
    margin-right:10px;
    flex:1;
  }
  .attribute-number-right{
    flex:2;
  }
</style>