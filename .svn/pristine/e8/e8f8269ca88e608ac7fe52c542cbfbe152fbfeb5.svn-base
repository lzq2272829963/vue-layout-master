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
            'text-color':{
                type:'input',
                value:'#ffffff',
                label:'激活颜色'
            },
            fill:{
                type:'input',
                value:'#409EFF',
                label:'激活边框色'
            },
            class:{
             type: 'input',
             value: '',
             label: '类名'
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
    var subContent = getSlotContent(slots)
    Object.keys(slots).forEach(slot =>{
        slotName +=slot+','
    })
    if(slotName[slotName.length-1]==','){
       slotName=slotName.substr(0,slotName.length-1)
    }
    let template = `<el-radio-group
                        id="${id}"
                        slots="${slotName}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        style="min-height:25px;min-width:60px;padding-right:30px;"
                        >
                        ${subContent}
                    </el-radio-group>`


    return { template, attributes, slots }
}
export default handle
