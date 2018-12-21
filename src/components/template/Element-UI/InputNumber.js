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
            min:{
                type:'number',
                value:1,
                label:'最小值'
            },
            max:{
                type:'number',
                value:10,
                label:'最大值'
            },
            step:{
                type:'number',
                value:1,
                label:'步长'
            },
            precision:{
                type:'number',
                value:0,
                label:'精度'
            },
            class:{
             type: 'input',
             value: '',
             label: '类名'
            },
            controls:{
                type:'radio',
                value:true,
                label:'是否使用控制按钮'
            },
            disabled:{
                type:'radio',
                value:false,
                label:'是否禁用'
            }
        },
        slots = {
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<el-input-number
                        v-model="number"
                        id="${id}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        
                        >
                    </el-input-number>`


    return { template, attributes, slots }
}
export default handle
