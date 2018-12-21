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
            'label-position':{
                type:'input',
                value:'right',
                label:'标签位置',
                menu:['right','left','top']
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
    let template = `<el-form
                        id="${id}"
                        slots="${slotName}"
                        ${stringAttr}
                        name="el-form"
                        draggable="true" @dragstart.native="handleDragStart"
                        style="min-height:35px;border:0.5px dashed;padding:20px 0px;"
                        >
                        ${subContent}
                    </el-form>`
    

    return { template, attributes, slots }
}
export default handle
