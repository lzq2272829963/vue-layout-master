import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: require('@/components/app')
    }, {
        path: '/preview/mobile',//手机预览
        name: 'preview_mobile',
        component: require('@/components/preview_mobile')
    }, {
        path: '/preview/pc/',//正常pc浏览
        name: 'preview_product',
        component: require('@/components/preview_product')
    }, {
        path: '/preview/pc/:id',//指定布局的正常pc浏览
        component: require('@/components/preview_product')
    }, {
        path: '*',
        redirect: '/'
    }]
})
