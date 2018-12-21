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
            type:{
                type:'input',
                value:'text',
                label:'类型',
                menu:['text','textarea']
            },
            placeholder:{
                type:'input',
                value:'请输入',
                label:'占位文本'
            },
            'prefix-icon':{
                type:'input',
                value:'请输入',
                label:'头部图标'
            },
            'prefix-icon':{
                type:'input',
                value:'请输入',
                label:'尾部图标'
            },
            rows:{
                type:'number',
                value:2,
                label:'行数'
            },
            autosize:{
                type:'radio',
                value:false,
                label:'是否自适应内容高度'
            },
            class:{
             type: 'input',
             value: '',
             label: '类名'
            },
            clearable:{
                type:'radio',
                value:false,
                label:'是否可清空'
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
    let template = `<el-input
                        id="${id}"
                        name="border-input"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        >
                    </el-input>`


    return { template, attributes, slots }
}
export default handle
