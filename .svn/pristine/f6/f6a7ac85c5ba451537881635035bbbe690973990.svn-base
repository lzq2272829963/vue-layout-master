import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import guid from '@/utils/guid'
var handle = function(_attr, _slots, { id }) {
    //定义默认属性
    let attributes = {
            size:{
                type:'input',
                value:'mini',
                label:'尺寸',
                menu:['medium','small','mini']
            },
            'value-format':{
                type:'input',
                value:'HH:mm:ss',
                label:'输出格式'
            },
            'prefix-icon':{
                type:'input',
                value:'el-icon-time',
                label:'头部图标的类名'
            },
            'clear-icon':{
                type:'input',
                value:'el-icon-circle-close',
                label:'清空图标的类名'
            },
            placeholder:{
                type:'input',
                value:'请输入时间',
                label:'非范围选择时占位内容'
            },
            align:{
                type:'input',
                value:'left',
                label:'对齐方式',
                menu:['left','center','right']
            },
            'start-placeholder':{
                type:'input',
                value:'请输入',
                label:'范围选择时开始占位内容'
            },
            'end-placeholder':{
                type:'input',
                value:'请输入',
                label:'范围选择时结束占位内容'
            },
            'range-separator':{
                type:'input',
                value:'至',
                label:'选择范围时的分隔符'
            },
            class:{
             type: 'input',
             value: '',
             label: '类名'
            },
            'is-range':{
                type:'radio',
                value:false,
                label:'是否为范围选择'
            },
            'arrow-control':{
                type:'radio',
                value:false,
                label:'是否使用箭头选择'
            },
            editable:{
                type:'radio',
                value:true,
                label:'文本框可否输入'
            },
            clearable:{
                type:'radio',
                value:true,
                label:'是否显示清除按钮'
            },
            readonly:{
                type:'radio',
                value:false,
                label:'是否只读'
            },
            disabled:{
                type:'radio',
                value:false,
                label:'是否禁用'
            }
        },
        slots = {
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<el-time-picker
                        v-model="test"
                        id="${id}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        >
                    </el-time-picker>`


    return { template, attributes, slots }
}
export default handle
