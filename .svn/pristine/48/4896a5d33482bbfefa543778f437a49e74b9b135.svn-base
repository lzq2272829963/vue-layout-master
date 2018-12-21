<template>
	<div>
	  <el-container class="common-container4" style="height:100%">
      <el-header height="25%"></el-header>
      <el-container class="common-container">
        <el-aside width="30%"></el-aside>
        <el-main></el-main>
      </el-container>
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
                  name:'Container'
                },
                attributes:{
                  direction:{
                      type:'input',
                      value:'horizontal',
                      label:'排列方向',
                      menu:['vertical','horizontal']
                  }
                },
                slots:{
                  default:[
                    {
                      info:{
                        id:guid(),
                        ui:'Element-UI',
                        name:'Aside'
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
            ]
          }
        }
        return {container:component}
      }
    }
  }
</script>
<style>
  .common-container4 .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding:0px;
  }
  .common-container4 .el-aside{
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    padding:0px;
  }
  .common-container4 .el-main{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 30px;
    padding:0px;
  }
</style>