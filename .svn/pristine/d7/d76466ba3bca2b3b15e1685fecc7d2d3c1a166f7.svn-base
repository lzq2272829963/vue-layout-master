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
            height:{
                type:'input',
                value:'',
                label:'高度'
            },
            'max-height':{
                type:'input',
                value:'',
                label:'最大高度'
            },
            'empty-text':{
               type:'input',
               value:'暂无数据',
               label:'空数据时文本内容'
            },
            'show-header':{
                type:'radio',
                value:true,
                label:'显示表头'
            },
            'highlight-current-row':{
               type:'radio',
               value:false,
               label:'高亮当前行'
            },
            border:{
                type:'radio',
                value:false,
                label:'纵向边框'
            },
            fit:{
                type:'radio',
                value:true,
                label:'列宽自动撑开'
            },
            'stripe':{
               type:'radio',
               value:false,
               label:'斑马纹'
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
    let template = `<el-table
                        id="${id}"
                        slots="${slotName}"
                        ${stringAttr}
                        name="border-table"
                        draggable="true" @dragstart.native="handleDragStart"
                        style="margin:1px;border:0.5px dashed;"
                        >
                        ${subContent}
                    </el-table>`
    

    return { template, attributes, slots }
}
export default handle
