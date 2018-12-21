import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import guid from '@/utils/guid'
var handle = function(_attr, _slots, { id }) {
    //定义默认属性
    let attributes = {
            height:{
                type:'input',
                value:'60px',
                label:'高度'
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

    let template = `<el-header
                        id="${id}"
                        name="el-header"
                        slots="${slotName}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        style="border:0.5px dashed;margin:1px;"
                        >
                        ${subContent}
                    </el-header>`


    return { template, attributes, slots }
}
export default handle
