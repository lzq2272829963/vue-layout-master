<template>
	<div >
	  <el-container class="common-container2" style="height:100%">
      <el-header height="25%"></el-header>
      <el-main></el-main>
      <el-footer height="25%"></el-footer>
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
              },
              {
                info:{
                  id:guid(),
                  ui:'Element-UI',
                  name:'Footer'
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
  .common-container2 .el-header,.common-container2 .el-footer{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding:0px;
  }
  .common-container2 .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 50%;
    padding:0px;
  }
</style>