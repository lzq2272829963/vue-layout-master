import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import guid from '@/utils/guid'
var handle = function(_attr, _slots, { id }) {
    //定义默认属性
    let attributes = {
            type:{
                type:'input',
                value:'',
                label:'类型',
                menu:['selection','index','expand']
            },
            align:{
                type:'input',
                value:'center',
                label:'对齐方式',
                menu:['left','center','right']
            },
            'header-align':{
                type:'input',
                value:'center',
                label:'表头对齐方式',
                menu:['left','center','right']
            },
            label:{
              type: 'input',
              value: '列名',
              label: '显示的标题'
            },
            width:{
              type: 'input',
              value: '',
              label: '列宽'
            },
            'min-width':{
              type: 'input',
              value: '',
              label: '最小列宽'
            },
            sortable:{
              type: 'radio',
              value: false,
              label: '排序'
            },
            resizable:{
              type: 'radio',
              value: false,
              label: '可拖动改变列宽'
            },
            'show-overflow-tooltip':{
              type: 'radio',
              value: false,
              label: '显示tooltip'
            },
            'class-name':{
             type: 'input',
             value: '',
             label: '列的类名'
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
    let template = `<el-table-column
                        id="${id}"
                        slots="${slotName}"
                        ${stringAttr}
                        name="el-table-column"
                        draggable="true" @dragstart.native="handleDragStart"
                        style="margin:1px;border:0.5px dashed;"
                        >
                        ${subContent}
                    </el-table-column>`
    

    return { template, attributes, slots }
}
export default handle
