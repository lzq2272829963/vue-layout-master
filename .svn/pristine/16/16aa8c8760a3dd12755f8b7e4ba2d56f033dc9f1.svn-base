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
            text:{
                type:'input',
                value:'radio',
                label:'显示名称',
            },
            label:{
                type:'input',
                value:'radio',
                label:'值',
            },
            class:{
             type: 'input',
             value: '',
             label: '类名'
            },
            border:{
                type:'radio',
                value:false,
                label:'是否显示边框'
            },
            disabled:{
                type:'radio',
                value:false,
                label:'是否禁用'
            }
        },
        slots = {
            default: []
        }

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    
    let template = `<el-radio
                        id="${id}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        >
                        ${attributes.text.value}
                    </el-radio>`


    return { template, attributes, slots }
}
export default handle
