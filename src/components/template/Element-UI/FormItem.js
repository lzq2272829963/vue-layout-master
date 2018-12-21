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
            'label-width':{
                type:'input',
                value:'50px',
                label:'标签宽度'
            },
            label:{
                type:'input',
                value:'标签',
                label:'标签文本'
            },
            class:{
             type: 'input',
             value: '',
             label: '类名'
            }
        },
        slots = {
            default: []
        }
    var slotName = ''
    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    var subContent = getSlotContent(slots)
    Object.keys(slots).forEach(slot =>{
        slotName +=slot+','
    })
    if(slotName[slotName.length-1]==','){
       slotName=slotName.substr(0,slotName.length-1)
    }
    let template = `<el-form-item
                        id="${id}"
                        slots="${slotName}"
                        ${stringAttr}
                        name="el-form-item"
                        draggable="true" @dragstart.native="handleDragStart"
                        style="min-height:35px;margin:1px;border:0.5px dashed;"
                        >
                        ${subContent}
                    </el-form-item>`
    

    return { template, attributes, slots }
}
export default handle
