import Vue from 'vue'
import preview from './preview'
//给定模板，和要挂载的元素id，挂载组件   
var mount = function() {
    let components = _Vue.$store.state.components
    var template = '<div>'
    for(var i=0;i<components.length;i++){
        template += components[i].template
    }
    $('#previewContent').html('<div id="preview"></div>')
    template += '</div>'
    return new Promise((resolve, reject) => {
        //需要延迟才能取到document.getElementById(id)
        setTimeout(() => {
            let data={
                test:'',
                number:1
            }
            let vm = new Vue({
                name: 'preview',
                data() {
                    return data
                },
                template: template,
                el: document.getElementById('preview'),
                methods:{
                    findElement(target){
                      var id = target.getAttribute('id')
                      if(id){
                        return {
                          id:id,
                          target:target
                        }
                      }else{
                        return this.findElement(target.parentElement)
                      }
                    },
                    handleDragStart:function(e){
                       var element=this.findElement(e.target);
                       var info = {
                         id: element.id
                       }
                       e.dataTransfer.setData('info', JSON.stringify(info))
                    }
                },
                mounted() {
                }
            })
            resolve(vm)

        }, 200)
    })
}

export default mount
