<template>
    <section class="vue-layout-master-attributes">
    <mu-content-block style="border-left:solid 1px #e6e6e6;height:100%;background-color:#fff;">
        <el-tabs v-model="activeTab" :stretch=true style="height:100%;" class="attributes-tab">
        <el-tab-pane label="属性" name="1">
         <subAttribute :attributes="current.attributes" @update="updateAttribute"></subAttribute>
        </el-tab-pane>
        <el-tab-pane label="交互" name="2">
        </el-tab-pane>
      </el-tabs>
      
    </mu-content-block>
    </section>
</template>
<script>
import mount from './mount'
import {
    getTemplate,updateAttributeById
} from '@/components/template'
import subAttribute from './subAttribute'
export default {
    name: 'attributes',
    components: {
        subAttribute
    },
    data() {
        return {
          activeTab:'1'
        }
    },
    computed: {
        current: { //当前选中组件
            get(value) {
                return this.$store.state.currentComponent
            }
        },
        components: {
          get(value) {
                return this.$store.state.components
          },
          set(components) {
                this.$store.commit('setState', {
                    components
                })
          }
        }
    },
    methods: {
        updateAttribute(attr) {
          var components = JSON.parse(JSON.stringify(this.components))
          var index=updateAttributeById(this.current.info.id,attr,components)
          this.components=components
          this.mount()
        },
        mount(index) {
            var id = this.current.info.id
            mount().then(vm => {
              //$(document.getElementById(id)).css('border', '1px dashed')
            })
        }
    }
}
</script>
<style>
  .vue-layout-master-attributes{
    height: 100%;
  }
  .attributes-tab .el-tabs__content{
    height: -webkit-calc(100% - 60px);
    overflow-y:auto;
    padding-right:10px;
  }
  .attributes-tab .el-tabs__content::-webkit-scrollbar{ 
      width:6px;  
      height:4px;    
  }  
  .attributes-tab .el-tabs__content::-webkit-scrollbar-track{  
      background: #fff; 
  }  
  .attributes-tab .el-tabs__content::-webkit-scrollbar-thumb{   
      background: #E0DFDE;  
      border-radius:4px; 
  }  
  .attributes-tab .el-tabs__content::-webkit-scrollbar-thumb:hover{  
      background:#CBC9C6;  
  }  
  .attributes-tab .el-tabs__content::-webkit-scrollbar-corner{  
      background: #f6f6f6;   
  }
</style>
