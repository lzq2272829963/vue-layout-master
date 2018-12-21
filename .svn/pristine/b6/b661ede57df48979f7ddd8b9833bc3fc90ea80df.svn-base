<template>
    <section class="vue-layout-master-components">
    <mu-content-block style="border-right:solid 1px #e6e6e6;height:100%;background-color:#fff;">
        <el-tabs class="components-tab" v-model="activeTab" :stretch=true style="height:100%;">
          <el-tab-pane label="组件" name="1" class="components-tab-pane" >
            <el-menu style="border-right:0px;" >
               <el-menu-item-group>
                  <template slot="title">Basic</template>
                  <li draggable="true" @dragstart="handleDragStart" index="Row"><el-menu-item index="Row" >Layout布局</el-menu-item></li>



                  <el-submenu index="CommonContainer" >
                    <template slot="title">                   
                       <span>网格布局</span>
                    </template>
                    <div style="padding:10px 20px;height:50px;" >
                      <el-row class="common-container-row" :gutter=10>
                        <el-col :span="8" >
                          <container1 class="common-container-row-container" ref="container1" draggable="true" @dragstart.native="handleDragStartContainer" index="container1"></container1>
                        </el-col>
                        <el-col :span="8" >
                          <container2 class="common-container-row-container" ref="container2" draggable="true" @dragstart.native="handleDragStartContainer" index="container2"></container2>
                        </el-col>
                        <el-col :span="8" >
                          <container3 class="common-container-row-container" ref="container3" draggable="true" @dragstart.native="handleDragStartContainer" index="container3"></container3>
                        </el-col>
                        <el-col :span="8" >
                          <container4 class="common-container-row-container" ref="container4" draggable="true" @dragstart.native="handleDragStartContainer" index="container4"></container4>
                        </el-col>
                          <el-col :span="8" >
                          <container5 class="common-container-row-container" ref="container5" draggable="true" @dragstart.native="handleDragStartContainer" index="container5"></container5>
                        </el-col>
                        <el-col :span="8" >
                          <container6 class="common-container-row-container" ref="container6" draggable="true" @dragstart.native="handleDragStartContainer" index="container6"></container6>
                        </el-col>
                        <el-col :span="8" >
                          <container7 class="common-container-row-container" ref="container7" draggable="true" @dragstart.native="handleDragStartContainer" index="container7"></container7>
                        </el-col>
                      </el-row>
                    </div>
                  </el-submenu>



                  <el-submenu index="Container" >
                  <template slot="title">                   
                     <li draggable="true" @dragstart="handleDragStart" index="Container">Container布局</li>
                  </template>
                  <li draggable="true" @dragstart="handleDragStart" index="Header">
                    <el-menu-item index="Header" >Header</el-menu-item>             
                  </li>
                  <li draggable="true" @dragstart="handleDragStart" index="Aside">
                   <el-menu-item index="Aside" >Aside</el-menu-item>
                  </li>
                   <li draggable="true" @dragstart="handleDragStart" index="Main">
                   <el-menu-item index="Main" >Main</el-menu-item>
                  </li>
                   <li draggable="true" @dragstart="handleDragStart" index="Footer">
                   <el-menu-item index="Footer" >Footer</el-menu-item>
                  </li>
                  </el-submenu>
                  <li draggable="true" @dragstart="handleDragStart" index="Button"><el-menu-item index="Button" >按钮</el-menu-item></li>
                </el-menu-item-group>
                <el-menu-item-group>
                  <template slot="title">Form</template>
                  <el-submenu index="Form" >
                  <template slot="title">                   
                     <li draggable="true" @dragstart="handleDragStart" index="Form">Form</li>
                  </template>
                     <li draggable="true" @dragstart="handleDragStart" index="FormItem">
                        <el-menu-item index="FormItem" >FormItem</el-menu-item>             
                      </li>
                  </el-submenu>
                  <el-submenu index="RadioGroup" >
                  <template slot="title">                   
                     <li draggable="true" @dragstart="handleDragStart" index="RadioGroup">单选框组</li>
                  </template>
                  <li draggable="true" @dragstart="handleDragStart" index="Radio">
                    <el-menu-item index="Radio" >普通单选框</el-menu-item>             
                  </li>
                  <li draggable="true" @dragstart="handleDragStart" index="RadioButton">
                   <el-menu-item index="RadioButton" >按钮单选框</el-menu-item>
                  </li>
                  </el-submenu>
                  <el-submenu index="CheckBoxGroup" >
                  <template slot="title">                   
                     <li draggable="true" @dragstart="handleDragStart" index="CheckBoxGroup">多选框组</li>
                  </template>
                  <li draggable="true" @dragstart="handleDragStart" index="CheckBox">
                    <el-menu-item index="CheckBox" >普通多选框</el-menu-item>             
                  </li>
                  <li draggable="true" @dragstart="handleDragStart" index="CheckBoxButton">
                   <el-menu-item index="CheckBoxButton" >按钮多选框</el-menu-item>
                  </li>
                  </el-submenu>
                  <li draggable="true" @dragstart="handleDragStart" index="Input"><el-menu-item index="Input" >输入框</el-menu-item></li>
                  <li draggable="true" @dragstart="handleDragStart" index="InputNumber"><el-menu-item index="InputNumber" >计数器</el-menu-item></li>
                  <!-- <li draggable="true" @dragstart="handleDragStart" index="Switch"><el-menu-item index="Switch" >开关</el-menu-item></li>-->
                  <li draggable="true" @dragstart="handleDragStart" index="Slider"><el-menu-item index="Slider" >滑块</el-menu-item></li>
                  <li draggable="true" @dragstart="handleDragStart" index="TimePicker"><el-menu-item index="TimePicker" >时间选择器</el-menu-item></li>
                  <li draggable="true" @dragstart="handleDragStart" index="DatePicker"><el-menu-item index="DatePicker" >日期选择器</el-menu-item></li>
                  <li draggable="true" @dragstart="handleDragStart" index="Rate"><el-menu-item index="Rate" >评分</el-menu-item></li>
                  <li draggable="true" @dragstart="handleDragStart" index="ColorPicker"><el-menu-item index="ColorPicker" >颜色选择器</el-menu-item></li>
                </el-menu-item-group>
                <el-menu-item-group>
                  <template slot="title">Data</template>
                  <el-submenu index="Table" >
                  <template slot="title">                   
                     <li draggable="true" @dragstart="handleDragStart" index="Table">Table</li>
                  </template>
                     <li draggable="true" @dragstart="handleDragStart" index="TableColumn">
                        <el-menu-item index="TableColumn" >Column</el-menu-item>             
                      </li>
                  </el-submenu>
                </el-menu-item-group>
            </el-menu>
          </el-tab-pane>
          <el-tab-pane label="组件树" name="2">
            <el-tree
               ref="componentTree"
              :data="componentTree"
              default-expand-all
              @node-click="handleNodeClick"
              :expand-on-click-node=false
              >
            </el-tree>
          </el-tab-pane>
      </el-tabs>
    </mu-content-block>
    </section>
</template>
<script>
import elementUiList from './list/element-ui'
import {getComponentById } from '@/components/template'
export default {
    name: 'components',
    components:{
      ...elementUiList
    },
    data() {
        return {
          activeTab:'1'
        }
    },
    computed: {
      componentTree:function(){
        var components = this.$store.state.components
        return this.getComponentTree(components)
      },
      components:function(){
        return this.$store.state.components
      }
    },
    mounted() {

    },
    methods: {
        handleNodeClick:function(data){
           var component = JSON.parse(JSON.stringify(getComponentById(data.id,this.components)))
           var currentComponent = this.$store.state.currentComponent
           if(currentComponent.info){
            var element = document.getElementById(currentComponent.info.id)
            if(element.getAttribute("name")=="el-col"){
              $(element).css('border', '0.5px dashed')
            }else{
              $(element).css('border', '0px')
            }
           }
           $(document.getElementById(component.info.id)).css('border', '0.5px solid red')
           this.$store.commit('setState',{
           currentComponent:component
           })
        },
        getComponentTree:function(components){
          var result = []
          for(var i=0;i<components.length;i++){
            result[i]={
              id:components[i].info.id,
              label:components[i].info.name,
              children:[]
            }
            Object.keys(components[i].slots).forEach(slot=>{
              var children=this.getComponentTree(components[i].slots[slot])
              if(children.length>0){
                result[i].children=result[i].children.concat(children)
              }
            })
          }
          return result
        },
        handleDragStart(e) {
            let componentName = e.target.getAttribute('index')
            let info = {
                name: componentName,
                ui: 'Element-UI'
            }
            e.dataTransfer.setData('info', JSON.stringify(info))
        },
        handleDragStartContainer(e) {
            var componentName = e.target.getAttribute('index')
            e.dataTransfer.setData('info', JSON.stringify(this.$refs[componentName].getContainer()))
        }
    }
}
</script>
<style>
  .vue-layout-master-components{
    height: 100%;
  }
  .components-tab .el-tabs__content{
    height: -webkit-calc(100% - 60px);
    overflow-y:auto;
  }
  .components-tab .el-tabs__content::-webkit-scrollbar{  
      width:6px;  
      height:4px;    
  }  
  .components-tab .el-tabs__content::-webkit-scrollbar-track{  
      background: #fff; 
  }  
  .components-tab .el-tabs__content::-webkit-scrollbar-thumb{  
      background: #E0DFDE;  
      border-radius:4px; 
  }  
  .components-tab .el-tabs__content::-webkit-scrollbar-thumb:hover{  
      background:#CBC9C6;  
  }  
  .components-tab .el-tabs__content::-webkit-scrollbar-corner{  
      background: #f6f6f6;   
  }
  .common-container-row .el-col{
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    justify-content:center;
    align-items:center;
    margin:5px 0px;
  }
  .common-container-row .common-container-row-container{
     height:20px;
     width:20px;
     cursor:pointer;
  }
</style>
