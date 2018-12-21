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
            'show-alpha':{
                type:'radio',
                value:false,
                label:'是否支持透明度选择'
            },
            'color-format':{
                type:'input',
                value:'hex',
                label:'输出颜色格式',
                menu:['hsl','hsv','hex','rgb']
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
    let template = `<el-color-picker
                        v-model="test"
                        id="${id}"
                        ${stringAttr}
                        draggable="true" @dragstart.native="handleDragStart"
                        >
                    </el-color-picker>`


    return { template, attributes, slots }
}
export default handle
