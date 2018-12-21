import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import guid from '@/utils/guid'
var handle = function(_attr, _slots, { id }) {
    //定义默认属性
    let attributes = {
            span:{
                type: 'number',
                value: 12,
                max: 24,
                min: 0,
                step: 1,
                label:'span'
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
    let template = `<el-col
                        id="${id}"
                        slots="${slotName}"
                        ${stringAttr}
                        name="el-col"
                        draggable="true" @dragstart.native="handleDragStart"
                        style="min-height:35px;margin:1px -1px 0px 0px;border:0.5px dashed;"
                        >
                        ${subContent}
                    </el-col>`
    

    return { template, attributes, slots }
}
export default handle
