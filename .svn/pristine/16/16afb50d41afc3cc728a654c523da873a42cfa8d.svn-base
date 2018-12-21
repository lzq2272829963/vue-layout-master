<template>
    <div style="padding-left:10px;">
          <div v-if="attr" v-for="(v,k,i) in attr" :key="k">
            <component v-model="v.value" :keyName="k" :is="'attribute-'+v.type" :label="v.label" :menu="v.menu" :min="v.min" :max="v.max" style="margin:15px 0px;" @change="updateAttribute"></component>
          </div>
    </div>
</template>
<script>
import attributeInput from './attributeInput'
import attributeNumber from './attributeNumber'
import attributeRadio from './attributeRadio'
export default {
    name: 'subAttributes',
    components:{
      attributeInput,attributeNumber,attributeRadio
    },
    data() {
        return {
            attr: {}
        }
    },
    props: {
        attributes: {
            type: Object,
            default: null
        }
    },
    created() {
        this.attr = JSON.parse(JSON.stringify(this.attributes))
    },
    watch: {
        attributes: {
            deep: true,
            handler(val, oldVal) {
                this.attr = JSON.parse(JSON.stringify(val))
            }
        }
    },
    methods: {
        updateAttribute(key) { //提交更新到父组件
           var attr={}
           attr[key]=this.attr[key]
           this.$emit('update', attr)
        }
    }
}
</script>
