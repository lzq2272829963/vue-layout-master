import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'
import guid from '@/utils/guid'
var handle = function(_attr, _slots, { id }) {
    //定义默认属性
    let attributes = {
            max:{
              type:'number',
              value:5,
              label:'最大分值'
            },
            'low-threshold':{
              type:'number',
              value:2,
              label:'低分中分界限'
            },
            'high-threshold':{
              type:'number',
              value:4,
              label:'高分中分界限'
            },
            'void-color':{
                type:'input',
                value:'#C6D1DE',
                label:'未选中颜色'
            },
            'disabled-void-color':{
                type:'input',
                value:'#EFF2F7',
                label:'只读时未选中颜色'
            },
            'allow-half':{
                type:'radio',
                value:false,
                label:'是否允许半选'
            },
            'show-score':{
                type:'radio',
                value:false,
                label:'是否显示当前分数'
            },
            disabled:{
                type:'radio',
                value:false,
                label:'是否为只读'
            }
        },
        slots = {
        }

    //覆盖默认属性
    Object.assign(attributes, _attr)

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<el-rate
                        v-model="number"
                        id="${id}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        >
                    </el-rate>`


    return { template, attributes, slots }
}
export default handle
