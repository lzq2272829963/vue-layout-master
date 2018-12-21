import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import guid from '@/utils/guid'
var handle = function(_attr, _slots, { id }) {
    //定义默认属性
    let attributes = {
            min:{
              type:'number',
              value:0,
              label:'最小值'
            },
            max:{
              type:'number',
              value:100,
              label:'最大值'
            },
            step:{
              type:'number',
              value:1,
              label:'步长'
            },
            class:{
             type: 'input',
             value: '',
             label: '类名'
            },
            width:{
                type:'number',
                value:40,
                label:'宽度'
            },
            'show-input':{
                type:'radio',
                value:false,
                label:'是否显示输入框'
            },
            'show-input-controls':{
                type:'radio',
                value:true,
                label:'是否显示输入框控制按钮'
            },
            'input-size':{
                type:'input',
                value:'mini',
                label:'输入框尺寸',
                menu:['large','medium','small','mini']
            },
            'show-stops':{
                type:'radio',
                value:false,
                label:'是否显示间断点'
            },
            'show-tooltip':{
                type:'radio',
                value:true,
                label:'是否显示tooltip'
            },
            range:{
                type:'radio',
                value:false,
                label:'是否为范围选择'
            },
            vertical:{
                type:'radio',
                value:false,
                label:'是否竖向模式'
            },
            height:{
                type:'input',
                value:'100px',
                label:'slider高度'
            },
            debounce:{
                type:'number',
                value:300,
                label:'输入时的去抖延迟'
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
    let template = `<el-slider
                        v-model="number"
                        id="${id}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        >
                    </el-slider>`


    return { template, attributes, slots }
}
export default handle
