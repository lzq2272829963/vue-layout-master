import Vue from 'vue'
import Vuex from 'vuex'
import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        css: '', //用户编辑的自定义css字符串
        activeUI:'Element-UI',
        currentComponent: {}, //预览视图的选中组件
        components: [], //预览视图的组件树
    },
    mutations: {
        setState(state, obj) {
            // obj = mergeDeep(JSON.parse(JSON.stringify(state)), obj)
            Object.assign(state, obj)
            //保存本地
            //localStorage.store = 
            localStorage.setItem('state',JSON.stringify(state))
        }
    },
    actions: {
    }
})

export default store
