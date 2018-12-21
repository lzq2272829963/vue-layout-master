<template>
    <div id="app">
        <el-row>
        <spr-header background-color="#444445" height="60px">
          <span style="color:#fff;font-size:18px;margin-left:20px;" slot="left">vue-layout-master</span>
        </spr-header>
        </el-row>
        <el-row :style="{height:height+'px'}">
            <el-col :span="5" style="height:100%;">
              <components ref="components"/>
            </el-col>
            <el-col :span="14" style="height:100%;">
              <preview ref="preview" />
            </el-col>
            <el-col :span="5" style="height:100%;">
             <attributes class="attributes-content" />
            </el-col>
        </el-row>
    </div>
</template>
<script>
import attributes from './attributes'
import components from './components'
import preview from './preview'
import componentTree from './componentTree.vue'
export default {
    name: 'app',
    data() {
        return {
          height:0
        }
    },
    components: {
        components,
        preview,
        attributes,
        componentTree
    },
    computed: {
        current: { //预览视图中选中的组件
            get() {
                return this.$store.state.currentComponent
            }
        },
        width: { //三栏的宽度设置
            get() {
                return this.$store.state.width[0]
            }
        },
        parentComponent: {
            get() {
                let component
                if (this.current.parentId)
                    component = this.$store.state.components.find(c => c.info.id === this.current.parentId)
                else
                    component = null
                return component
            }
        },
        components: {
            get() {
                return this.$store.state.components
            }
        }
    },
    watch: {
        
    },
    methods: {
        switchComponent() {
            let el = document.getElementById(this.parentComponent.info.id)
            el.click()
        },
        oprate(e) {
            // let components = await this.$store.dispatch('delComponent', this.current.info.id)
            // this.$refs.preview.fresh()
            this.$refs.preview.rightClick(e)

        },
        openUiDocument() {
            switch (this.current.info.ui) {
                case 'Muse-UI':
                    return window.open('http://www.muse-ui.org/#/' + this.current.info.name.replace(' ', ''))
                case 'Mint-UI':
                    return window.open('https://mint-ui.github.io/docs/#/zh-cn/' + this.current.info.name.replace(' ', '-'))
                case 'iView-UI':
                    return window.open('https://www.iviewui.com/components/' + this.current.info.name)
                default:
                    return this.$toast('无文档页')
            }
        },
        setSelectEffect(val) {
            let head = document.head
            let style = document.getElementById('vue-layout-style')
            if (!style) {
                style = document.createElement('style')
                style.id = 'vue-layout-style'
                style.type = 'text/css'
                head.appendChild(style)
            }

            let cssText
            if (val) {
                cssText = `[data-component-active="true"] {
                              box-shadow: inset 0px 0px 0px 1px pink!important;
                          }
                          [data-component-active]:hover {
                              box-shadow: inset 0px 0px 0px 1px pink!important;
                          }
                          [data-component-active]:focus {
                              box-shadow: inset 0px 0px 0px 1px pink!important;
                          }`
            } else {
                cssText = `[data-component-active="true"] {
                              box-shadow: none;
                              outline:none;
                          }
                          [data-component-active]:hover {
                              box-shadow: none;
                          }
                          [data-component-active]:focus {
                              box-shadow: none;
                          }`
            }
            let textNode = document.createTextNode(cssText)
            style.innerHTML = ''
            style.appendChild(textNode)
        },
        createShare() {
            let share = new this.$lean.Object('Share')
            share.set('store', this.$store.state)
            share.save().then(res => {
                this.share.url = location.origin + location.pathname + '#/share/' + res.id
                this.share.experience = location.origin + location.pathname + '#/preview/pc/' + res.id
            })
        }
    },
    created(){
      this.height = $('body').height() -60
    },
    mounted() {
        var _this = this
        this.$nextTick(function(){
           document.addEventListener("webkitfullscreenchange", e => {
                if (!document.webkitIsFullScreen) {
                  $('body').height(window.innerHeight)
                  _this.height = window.innerHeight -60
                }else{
                  _this.height = $('body').height() -60
                }
           }, false)
        })
    }
}
</script>
<style lang="less" scoped>
@import '~muse-ui/src/styles/colors.less';
@previewBG: @deepPurple50;
* {
    -webkit-user-select: none;
}

::-webkit-scrollbar {
    display: none;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.title {
    font-family: Consolas, Liberation Mono, Menlo, Courier, monospace;
    .description {
        vertical-align: super;
    }
}

.main-content>div {
    transition: all .5s;
}

.client-height {
    height: 100vh;
    overflow: auto;
}

.attributes {
    .client-height;
    background-color: @previewBG;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-item: center;
    .header {
        white-space: nowrap;
    }
    .select-field {
        width: 70px;
        vertical-align: top;
        text-align: center;
    }
}

.attributes-content {
    flex: 1;
}

.component-tree {
    flex: 1;
}

.attributes-bottom {
    position: relative;
    text-align: center;
    color: @grey500;
}

.preview {
    .client-height;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
    z-index: 1;
}

.components {
    .client-height;
    background-color: @previewBG;
    overflow-y: scroll;
}

.parent-component {
    cursor: pointer;
}
</style>
