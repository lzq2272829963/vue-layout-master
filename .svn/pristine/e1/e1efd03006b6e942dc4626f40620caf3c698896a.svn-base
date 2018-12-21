<template>
    <section class="preview" @dragover="handleDragOver" @drop="handleDrop" @dragleave="handleDragLeave">
        <mu-paper class="preview-head">
            <div class="bar">
                <mu-sub-header style="display:inline;">{{showType}}</mu-sub-header>
                 <mu-icon-button style="float:right;" icon="delete" tooltip="清空" @click="handleEmpty" />
                 <mu-icon-button style="float:right;" icon="fullscreen" tooltip="全屏" @click="handleFullScreen" />
                <mu-icon-button style="float:right;" icon="code" :tooltip="tooltip" @click="handleShowCode"/>         
            </div>
        </mu-paper>

        <div class="preview-content-area" :style="{overflowY:'auto',height:style.height-108+'px'}">
        <mu-content-block v-if="code!=''" :class="{'content':true,'active':showType!=='预览'}" >
            <pre v-show="showType==='代码'" v-highlightjs="code"><code class="html"></code></pre>
        </mu-content-block>
        <div id="previewContent" v-show="showType=='预览'" ref="previewContent" class="preview-content" style="padding-bottom:25px;min-height:500px;" @contextmenu="handleContextMenu" @click="handleClick" @mouseover="handleMouseOver" @mouseout="handleMouseOut" >
          
          <!--  <div :id="item.info.id" v-for="(item,index) in components"></div> -->
        </div>
        </div>
        <mu-popover placement="bottom" :trigger="popover.trigger" :open="popover.open" @close="popover.open=false">
            <mu-menu @change="selectedSlot">
                <mu-menu-item v-for="(val,index) in slots" :title="val" :value="val" :key="index" />
            </mu-menu>
          </mu-popover>
        <div ref="contextmenu" :style="contextmenu.style"></div>
        <mu-popover :trigger="contextmenu.trigger" :open="contextmenu.open" @close="contextmenu.open = false">
            <mu-menu class="contextmenu" @itemClick="contextmenu.open=false" autoWidth >
                <mu-menu-item title="删除" @click="handleDelete" />
            </mu-menu>
        </mu-popover>
        <mu-popover :trigger="mouseover.trigger" :open="mouseover.open" placement="bottom">
            <span style="font-size:14px;padding:4px 8px;color:#fff;background-color:#616161;opacity:.9;line-height:22px;border-radius:2px;">当前组件为:{{mouseover.componentName}}</span>
        </mu-popover>
        <div ref="closeArea" :style="close.style"></div>
        <mu-popover class="close-popover"  :trigger="close.trigger"  :open="close.open" @close="close.open = false">
            <i id="delIcon" class="el-icon-close" style="font-size:8px;padding:0px 5px;line-height:22px;color:#fff;background-color:#616161;opacity:.9;cursor:pointer;font-weight:800;" @click="handleDeleteById"></i>
        </mu-popover>
    </section>
</template>
<script>
import mount from './mount'
// 代码高亮样式
import '@/assets/css/highlight/default.css'
import '@/assets/css/highlight/Atom-One-Light.css'

// scoped style插件 ，解决webkit不支持scoped的问题
import scopedCss from 'scopedcss'

//取随机id
import guid from '@/utils/guid'
import { getTemplate,setSlots,getComponentById,delComponentById,addComponentById } from '@/components/template'
const clientWidth = window.screen.availWidth
const clientHeight = window.screen.availHeight
export default {
    name: 'preview',
    data() {
        return {
            info:{},
            slots:[],
            current:{

            },
            popover:{
              trigger:null,
              open:false
            },
            mouseover:{
              trigger:null,
              open:false,
              componentName:'',
              target:null
            },
            close:{
              open:false,
              trigger:null,
              id:'',
              style:{}
            },
            contextmenu:{
              open:false,
              trigger:null,
              style:{},
              id:''
            },
            style:{
              height:0
            },
            showType:'预览',
            tooltip:'查看代码'
        }
    },
    computed: {
        components: { //组件树 ，预览视图中所有组件
            get() {
                return this.$store.state.components
            },
            set(components) {
                this.$store.commit('setState', {
                    components
                })
            }
        },
        code:function(){
          var code=``
          for(var i=0;i<this.components.length;i++){
            code+=this.components[i].template
          }
          code = code.replace(/ id/g,'ref')
          code = code.replace(/ style=".*?"/g, '')
          code = code.replace(/ slots=".*?"/g, '')
          code = code.replace(/draggable=".*?"/g, '')
          code = code.replace(/name=".*?"/g, '')
          code = code.replace(/@dragstart\.native=".*?"/g, '\n')
          code = code.replace(/text=".*?"/g, '')
          code = code.replace(/\n\n/g, '\n')
          code = this.$prettyDom(code)
          return code
        }
    },
    mounted() {
        
    },
    methods: {
    handleMouseOut:function(e){
      var toId=undefined
      if(e.toElement){
        toId=e.toElement.getAttribute('id')
      }
      if(!toId||toId!='delIcon'){
        var element=this.findElement(e.target)
        this.mouseover.open = false
        this.mouseover.id = ''
        this.mouseover.trigger = null
        this.mouseover.componentName =''
        if(element.id=='previewContent'){
          this.close.open=false
          this.close.trigger=null
          this.close.id=''
        }
        var currentId = ''
        if(this.$store.state.currentComponent.info){
          currentId=this.$store.state.currentComponent.info.id
        }
        if(this.mouseover.target&&element.id!=currentId){
           var name = this.mouseover.target.getAttribute("name")
           if(name&&name.indexOf("el")!=-1){
             $(this.mouseover.target).css("border","0.5px dashed")
           }else if(name&&name.indexOf("border")!=-1){
             $(this.mouseover.target).css("border","1px solid #dcdfe6")
           }else{
             $(this.mouseover.target).css("border","0px")
           }
           this.mouseover.target = null
        }else if(element.id==currentId){
          $("#"+currentId).css("border","0.5px solid red")
          this.mouseover.target = null
        }
      }
    },
    handleMouseOver:function(e){
      var currentId = undefined
      if(this.$store.state.currentComponent.info){
          currentId=this.$store.state.currentComponent.info.id
      }
      if(this.mouseover.target){
           var name = this.mouseover.target.getAttribute("name")
           if(name&&name.indexOf("el")!=-1){
             $(this.mouseover.target).css("border","0.5px dashed")
           }else if(name&&name.indexOf("border")!=-1){
             $(this.mouseover.target).css("border","1px solid #dcdfe6")
           }else{
             $(this.mouseover.target).css("border","0px")
           }
           this.mouseover.target = null
      }
      if(currentId){
        $("#"+currentId).css("border","0.5px solid red")
      }
      var element=this.findElement(e.target)
      if(element.id=='previewContent'){
        this.close.open=false
        this.close.trigger=null
        this.close.id=''
      }
      this.mouseover.target=element.target
      if(this.mouseover.id!=element.id){
        this.mouseover.id = element.id
        var component = getComponentById(element.id,this.components)
        if(component){
          $(element.target).css("border","0.5px dashed red")
          //this.mouseover.target=element.target
          this.mouseover.trigger = element.target
          this.mouseover.componentName = component.info.name
          this.mouseover.open = true
          if(element.target.getAttribute("name").indexOf("el")!=-1){
            this.close.id=element.id
            this.close.open=true
            this.close.trigger=this.$refs.closeArea
            this.close.style = {
            position: 'fixed',
            left: element.target.getBoundingClientRect().left + element.target.offsetWidth - 22 + 'px',
            top: element.target.getBoundingClientRect().top + 'px'
            }
          }else{
            this.close.open=false
          }
          
        }else{
            this.mouseover.target = null
            this.mouseover.trigger = null
            this.mouseover.componentName = ''
            this.mouseover.open = false
        }
      }
    },
    handleFullScreen:function(){
       var el = document.body
       if (document.webkitIsFullScreen){
          return document.webkitCancelFullScreen()
       }
       //Chrome
       if (el.webkitRequestFullScreen) {
          el.webkitRequestFullScreen()
          el.style.width = window.screen.width + 'px'
          el.style.height = window.screen.height + 'px'
       }
    },
    handleDelete:function(){
      var id = this.$store.state.currentComponent.info.id
      var components= JSON.parse(JSON.stringify(this.components))
      var index=delComponentById(id,components)
      if(index!=undefined){
        this.$store.commit('setState',{
           currentComponent:{},
           components:components
        })
        this.mount()
      }
    },
    handleDeleteById:function(){
      if(this.close.id!=""){
        var components= JSON.parse(JSON.stringify(this.components))
        var index=delComponentById(this.close.id,components)
        if(index!=undefined){
          this.$store.commit('setState',{
           currentComponent:{},
           components:components
        })
        this.close.open=false
        this.close.trigger=null
        this.close.id=''
        this.mount()
        }
      }
    },
    handleShowCode:function(){
      if(this.showType=='预览'){
        this.showType='代码'
        this.tooltip='预览'
      }else{
        this.showType='预览'
        this.tooltip='查看代码'
      }
    },
    findElement(target){
      var id = target.getAttribute('id')
      if(id){
        return {
          id:id,
          target:target
        }
      }else{
        return this.findElement(target.parentElement)
      }
    },
    handleClick(e) {
      e.preventDefault()
      var element = this.findElement(e.target)
      var id=element.id
      var currentComponent = this.$store.state.currentComponent
      if(currentComponent.info){
        var preElement=document.getElementById(currentComponent.info.id)
        var name=preElement.getAttribute("name")
        if(name&&name.indexOf("el")!=-1){
          $(preElement).css("border","0.5px dashed")
        }else if(name&&name.indexOf("border")!=-1){
          $(preElement).css("border","1px solid #dcdfe6")
        }else{
          $(preElement).css('border', '0px')
        }
      }
      if(id&&id.length==13&&id.indexOf('-')==8){
        $(element.target).css('border', '1px solid red')
        var component = JSON.parse(JSON.stringify(getComponentById(id,this.components)))
        this.$store.commit('setState',{
           currentComponent:component
        })
      }
    },
    handleContextMenu(e) {
        this.handleClick(e);
        var element=this.findElement(e.target);
        if(element.id&&element.id!='previewContent'){
           this.contextmenu.trigger = this.$refs.contextmenu
           this.contextmenu.style = {
            position: 'fixed',
            left: e.x + 10 + 'px',
            top: e.y - 10 + 'px'
           }
           this.contextmenu.open = true
           e.preventDefault();
        }
     },
     selectedSlot:function(){

     },
     handleEmpty:function(){
       this.$store.commit('setState',{
         components:[],
         currentComponent:{}
       })
       this.$refs.previewContent.innerHTML=''
     },
     handleDragLeave:function(e){
        var element=this.findElement(e.target)
        var name=element.target.getAttribute("name")
        if(name&&name.indexOf("el")!=-1){
          $(element.target).css("border","0.5px dashed")
        }else if(name&&name.indexOf("border")!=-1){
          $(element.target).css("border","1px solid #dcdfe6")
        }else{
          $(element.target).css("border","0px")
        }
     },
     handleDragOver:function(e){
        this.handleMouseOver(e);
        var element=this.findElement(e.target)
        var id=element.target.id
        if(id!="app"&&id!="previewContent"){
          $(element.target).css("border","0.5px dashed red")
        }
        e.preventDefault()
      },
      handleDrop:function(e){
        var element=this.findElement(e.target)
        this.slots.splice(0,this.slots.length)
        var slots=element.target.getAttribute("slots")
        var id=element.id
        if(slots){
            this.slots=slots.split(",")
        }
        var info=e.dataTransfer.getData('info')
        if(info){
          this.info=JSON.parse(info)
          var components= JSON.parse(JSON.stringify(this.components))
          if(this.info.id){
            //var components= JSON.parse(JSON.stringify(this.components))
            var component=getComponentById(this.info.id,components)
            var index=delComponentById(this.info.id,components)
            if(this.slots.length==0){
              components.push(component)
              this.components=components
              this.mount(component.info.id)
            }else if(this.slots.length>1){
              this.popover.trigger=element.target
              this.popover.open=true
            }else{       
              addComponentById(id,components,component)
              this.components=components
              this.mount(component.info.id)
            }
          }else if(this.info.container){
            if(this.slots.length==0){
              var component = getTemplate(this.info.container.info,this.info.container.attributes,this.info.container.slots)
              components.push(component)
              this.components=components
              this.mount(this.info.container.info.id)
            }else if(this.slots.length>1){
              this.popover.trigger=element.target
              this.popover.open=true
            }else{       
              addComponentById(id,components,this.info.container)
              this.components=components
              this.mount(this.info.container.info.id)
            }
          }else{
            this.info.id=guid()
            //var components=JSON.parse(JSON.stringify(this.components))
            if(this.slots.length==0){
              var template=getTemplate(this.info,{},{})
              components.push(template)
              this.components=components
              this.mount(this.info.id)
            }else if(this.slots.length>1){
              this.popover.trigger=e.target
              this.popover.open=true
            }else{       
              var index=setSlots(id,'default',this.info,components)
              components[index]=getTemplate(components[index].info,components[index].attributes,components[index].slots)
              this.components=components
              this.mount(this.info.id)
            }
          }
        }
      },
      mount(id) {
            var _this = this
            mount().then(vm => {
               if(id){
                  var currentComponent = _this.$store.state.currentComponent
                  if(currentComponent.info){
                    //$(document.getElementById(currentComponent.info.id)).css('border', '0px')
                  }
                  //$(document.getElementById(id)).css('border', '1px dashed')
                  var component = JSON.parse(JSON.stringify(getComponentById(id,this.components)))
                 _this.$store.commit('setState',{
                  currentComponent:component
                 })
               }     
            })
        }
    },
    created(){
      var timeDate =  window.localStorage.getItem("timeDate")
      
    },
    mounted(){
      this.style.height = $('body').height()
    },
    watch: {
    }
}
</script>
<style lang="less" scoped>
@import '~muse-ui/src/styles/colors.less';
.preview {
    height: inherit;
    position: relative;
    overflow: hidden;
    background: white;
}

.preview-area {
    overflow: auto;
    position: relative;
    height: inherit;
    z-index: 0;
    padding-bottom: 100px;
}

.preview-tip {
    text-align: center;
    color: @grey500;
    position: absolute;
    top: 40%;
    z-index: -1;
}

.preview-head {
    width: 100%;
    top: 0;
    z-index: 2;
    .bar {
        background-color: @grey100;
    }
    .content {
        height: 0;
        overflow: auto;
        transition: all .2s;
        padding-top: 0;
        padding-bottom: 0;
        margin-top: 0;
        margin-bottom: 0;
        background-color: @grey50;
        user-select: text;
        code {
            background: none;
            font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;
        }
    }
    .content.active {
        height: 95vh;
    }
}

.css-editor {
    border: none;
    background: none;
    width: 100%;
    height: 100%;
    outline: none;
    overflow: auto;
}

.preview-mobile {
    position: absolute;
    width: 375px;
    height: 100%;
    left: 0;
    right: 0;
    margin: auto;
    border: none;
    box-shadow: 0 14px 45px rgba(0, 0, 0, .247059), 0 10px 18px rgba(0, 0, 0, .219608);
}

.preview-content-area::-webkit-scrollbar{  
      width:6px;  
      height:4px;    
}  
.preview-content-area::-webkit-scrollbar-track{  
      background: #fff; 
}  
.preview-content-area::-webkit-scrollbar-thumb{  
      background: #E0DFDE;  
      border-radius:4px; 
}  
.preview-content-area::-webkit-scrollbar-thumb:hover{  
      background:#CBC9C6;  
}  
.preview-content-area::-webkit-scrollbar-corner{  
      background: #f6f6f6;   
}
.contextmenu>div {
    width: 100%;
}

</style>

