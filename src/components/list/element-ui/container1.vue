<template>
	<div>
	  <el-container style="height:100%;" class="common-container1">
		  <el-header height="30%"></el-header>
		  <el-main></el-main>
	  </el-container>
	</div>
</template>
<script>
  import guid from '@/utils/guid'
  export default{
    methods:{
      getContainer:function(){
        var component={
          info:{
            id:guid(),
            ui:'Element-UI',
            name:'Container'
          },
          attributes:{},
          slots:{
            default:[
              {
                info:{
                  id:guid(),
                  ui:'Element-UI',
                  name:'Header'
                },
                attributes:{},
                slots:{}
              },
              {
                info:{
                  id:guid(),
                  ui:'Element-UI',
                  name:'Main'
                },
                attributes:{},
                slots:{}
              }
            ]
          }
        }
        return {container:component}
      }
    }
  }
</script>
<style>
  .common-container1 .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding:0px;
  }
  .common-container1 .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 70%;
    padding:0px;
  }
</style>