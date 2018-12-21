/*import Common from './Common'
import MuseUI from './Muse-UI'
import MintUI from './Mint-UI'
import iViewUI from './iView-UI'*/
import ElementUI from './Element-UI'
import mergeDeep from '@/utils/mergeDeep'

var getTemplate = function(info, _attr = {}, _slots = {}, flag) {
    let component
    switch (info.ui) {
        case 'Muse-UI':
            component = MuseUI[info.name](_attr, _slots, info)
            break
        case 'Mint-UI':
            component = MintUI[info.name](_attr, _slots, info)
            break
        case 'iView-UI':
            component = iViewUI[info.name](_attr, _slots, info)
            break
        case 'Common':
            component = Common[info.name](_attr, _slots, info)
            break
        case 'Element-UI':
            component = ElementUI[info.name](_attr, _slots, info ,flag)
            break
    }
    //没有class属性的，添加class属性
    if (!component.attributes.class) {
        component.attributes.class = {
            type: 'input',
            value: '',
            label: '类名'
        }
    }

    component.info = info

    return component
}

var getSlotContent = function(slots) {
    let inner = ''
    Object.keys(slots).forEach(slot => {
        if(slot.indexOf('default')!=-1){
            inner += `\n`
            for(var i=0;i<slots[slot].length;i++){
                var component=slots[slot][i]
                var temp = getTemplate(component.info,component.attributes,component.slots)
                slots[slot][i]=temp
                inner += temp.template
            }
            inner +=`\n`
        }
    })
    return inner
}

var getStringTypeAttr = function(attributes) {
    // value为空的不添加到模板中
    let stringAttr = ''
    Object.keys(attributes).forEach(key => {
        let attrKey
        let arr = ['input', 'selection', 'icon','ionicon', 'color'] //这些类型都不用加bind
        if (arr.includes(attributes[key].type) || attributes[key].notBind) {
            attrKey = key
        } else {
            attrKey = `:${key}`
        }
        let attr = attributes[key].value ? `${attrKey}="${attributes[key].value}"\n` : ''
        stringAttr += attr
    })
    return stringAttr
}
var setSlots = function(id,slot,info,components){
   var index=undefined
   for(var i=0;i<components.length;i++){
     if(components[i].info.id==id){
        components[i].slots[slot].push(getTemplate(info,{},{}))
        return i;
     }else{
        Object.keys(components[i].slots).forEach(key=>{
            if(setSlots(id,slot,info,components[i].slots[key])!=undefined){
               index=i
            }
        })
        if(index){
            return index
        }
     }
   }
   return index
}

var addComponentById= function(id,components,component){
  for(var i=0;i<components.length;i++){
    if(components[i].info.id==id){
        components[i].slots.default.push(component)
        return true
    }else{
        Object.keys(components[i].slots).forEach(key=>{
            if(addComponentById(id,components[i].slots[key],component)){
               components[i]=getTemplate(components[i].info,components[i].attributes,components[i].slots)
               return true
            }
        })
    }
  }
  return false
}

var getComponentById = function(id,components){
  var component=undefined
  for(var i=0;i<components.length;i++){
    if(components[i].info.id==id){
        return components[i]
    }else{
        Object.keys(components[i].slots).forEach(key=>{
            var result = getComponentById(id,components[i].slots[key])
            if(result!=undefined){
               component=result
            }
        })
        if(component){
            return component
        }
    }
  }
  return component
}
var updateAttributeById = function(id,attr,components){
    var index=undefined
   for(var i=0;i<components.length;i++){
     if(components[i].info.id==id){
        components[i]=getTemplate(components[i].info,mergeDeep(components[i].attributes,attr),components[i].slots,true)
        return i;
     }else{
        Object.keys(components[i].slots).forEach(key=>{
            if(updateAttributeById(id,attr,components[i].slots[key])!=undefined){
               index=i
            }
        })
        if(index!=undefined){
            components[i]=getTemplate(components[i].info,components[i].attributes,components[i].slots)
            return index
        }
     }
   }
   return index
}

var delComponentById = function(id,components){
    var index=undefined
   for(var i=0;i<components.length;i++){
     if(components[i].info.id==id){
        components.splice(i,1)
        return i;
     }else{
        Object.keys(components[i].slots).forEach(key=>{
            if(delComponentById(id,components[i].slots[key])!=undefined){
               index=i
            }
        })
        if(index!=undefined){
            components[i]=getTemplate(components[i].info,components[i].attributes,components[i].slots)
            return index
        }
     }
   }
   return index
}

export { getSlotContent, getTemplate, getStringTypeAttr ,setSlots ,getComponentById ,updateAttributeById ,delComponentById ,addComponentById}
