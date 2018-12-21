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
                value:'primary',
                label:'类型',
                menu:['primary','success','warning','danger','info','text']
            },
            text:{
                type:'input',
                value:'按钮',
                label:'内容'
            },
            icon:{
                type:'input',
                value:'',
                label:'图标类名'
            },
            class:{
             type: 'input',
             value: '',
             label: '类名'
            },
            plain:{
                type:'radio',
                value:false,
                label:'是否朴素'
            },
            round:{
                type:'radio',
                value:false,
                label:'是否圆角'
            },
            circle:{
                type:'radio',
                value:false,
                label:'是否圆形'
            },
            loading:{
                type:'radio',
                value:false,
                label:'是否加载中'
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
    var slotName=''
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<el-button
                        id="${id}"
                        slots="${slotName}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        >
                        ${attributes.text.value}
                    </el-button>`


    return { template, attributes, slots }
}
export default handle
