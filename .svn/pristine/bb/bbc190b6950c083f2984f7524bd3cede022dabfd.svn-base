import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import guid from '@/utils/guid'
var handle = function(_attr, _slots, { id }) {
    //定义默认属性
    let attributes = {
            direction:{
                type:'input',
                value:'vertical',
                label:'排列方向',
                menu:['vertical','horizontal']
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

    //覆盖默认属性
    var slotName=''
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

    let template = `<el-container
                        id="${id}"
                        name="el-container"
                        slots="${slotName}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        style="min-height:50px;padding:20px 0px;border:0.5px dashed;"
                        >
                        ${subContent}
                    </el-container>`


    return { template, attributes, slots }
}
export default handle
