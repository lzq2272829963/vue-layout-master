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
            'active-icon-class':{
                type:'input',
                value:'',
                label:'打开显示图标'
            },
            'inactive-icon-class':{
                type:'input',
                value:'',
                label:'关闭显示图标'
            },
            'active-text':{
                type:'input',
                value:'',
                label:'打开显示文字'
            },
            'inactive-text':{
                type:'input',
                value:'',
                label:'关闭显示文字'
            },
            'active-value':{
                type:'input',
                value:'true',
                label:'打开时的值'
            },
            'inactive-value':{
                type:'input',
                value:'false',
                label:'关闭时的值'
            },
            'active-color':{
                type:'input',
                value:'#409EFF',
                label:'打开时的背景色'
            },
            'inactive-color':{
                type:'input',
                value:'#C0CCDA',
                label:'关闭时的背景色'
            },
            class:{
             type: 'input',
             value: '',
             label: '类名'
            },
            width:{
                type:'number',
                value:40,
                label:'宽度'
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
    let template = `<el-switch
                        v-model="test"
                        ${stringAttr}
                        ref="${id}"
                        draggable="true" @dragstart.native="handleDragStart"
                        >
                    </el-switch>`

    return { template, attributes, slots }
}
export default handle
