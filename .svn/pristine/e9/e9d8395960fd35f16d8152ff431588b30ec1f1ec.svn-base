<template>
	<div>
	  <el-container class="common-container6" style="height:100%;">
      <el-aside width="30%"></el-aside>
      <el-container class="common-container6">
        <el-header height="25%"></el-header>
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
            ]
          }
        }
        return {container:component}
      }
    }
  }
</script>
<style>
  .common-container6 .el-header,.common-container6 .el-footer{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding:0px;
  }
  .common-container6 .el-aside{
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    padding:0px;
  }
  .common-container6 .el-main{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding:0px;
  }
</style>