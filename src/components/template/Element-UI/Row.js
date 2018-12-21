import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import guid from '@/utils/guid'
var handle = function(_attr, _slots, { id }, flag) {
    //定义默认属性
    let attributes = {
            type:{
                type:'input',
                value:'',
                label:'类型'
            },
            justify:{
                type:'input',
                value:'start',
                label:'水平对齐'
            },
            align:{
                type:'input',
                value:'middle',
                label:'垂直对齐'
            },
            col:{
                type:'number',
                value:2,
                label:'列数',
                min:0,
                max:24
            },
            gutter:{
                type:'number',
                value:0,
                label:'列间隔',
                min:0,
                max:100
            }
        },
        slots = {
            default: []
        }

    //覆盖默认属性
    var slotName=''
    if(!flag){
      Object.assign(slots, _slots)
    }
    Object.assign(attributes, _attr)
    if(!_attr.col&&Object.keys(_slots).length==0&&attributes.col&&attributes.col.value&&attributes.col.value>0){
        //delete slots.default
        for(var i=0;i<attributes.col.value;i++){
            //slots['col'+(i+1)]=[]
            var info={
                id:guid(),
                name:'Col',
                ui:'Element-UI'
            }
            //slots['col'+(i+1)].push(getTemplate(info,{},{}))
            slots.default.push(getTemplate(info,{},{}))
        }
    }else if(_attr.col&&flag&&_attr.col.value){
        if(_attr.col.value>0){
            //delete slots.default
            for(var i=0;i<_attr.col.value;i++){
                //slots['col'+(i+1)]=[]
                var info={
                    id:guid(),
                    name:'Col',
                    ui:'Element-UI'
                }

                //slots['col'+(i+1)].push(getTemplate(info,{},{}))
                slots.default.push(getTemplate(info,{},{}))
            }
        }
    }
    attributes.col.value=slots.default.length
    var subContent = getSlotContent(slots)
    Object.keys(slots).forEach(slot =>{
        slotName +=slot+','
    })
    if(slotName[slotName.length-1]==','){
       slotName=slotName.substr(0,slotName.length-1)
    }
    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<el-row
                        id="${id}"
                        slots="${slotName}"
                        ${stringAttr}
                        name="el-row"
                        draggable="true" @dragstart.native="handleDragStart"
                        style="min-height:35px;padding:0px 1px 1.5px 1px;"
                        >
                        ${subContent}
                    </el-row>`

    //删除自定义非ui属性
    //template = template.replace(`:column="${attributes.column.value}"`, '')

    return { template, attributes, slots }
}
export default handle
