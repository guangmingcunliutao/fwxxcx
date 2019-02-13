// Component/list/list.js


// 组件扩展功能必须声明在Component之前，否则会报错
let behaviorsFirst = Behavior({
    data: {
        msg: '这是组件扩展功能，可以合并到Component当中'
    }
});
let behaviorsSec = Behavior({
    data: {
        msg: '可以定义多个Behavior，但是数组后面的元素值，会覆盖前面的，组件自身的属性优先级最高'
    }
});


Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    options: {
        multipleSlots: true
    },

    /**
     * 组件的初始数据
     */
    data: {
        count: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getNodes(index){
            let items = this.getRelationNodes('../item/item');
            items.map((item, i)=>{
                if(i === index){
                    item.setData({
                        isActive: !item.data.isActive
                    });
                }else {
                    item.setData({
                        isActive: false
                    });
                }
            });
        }
    },

    /* 
    组件扩展功能
     */
    behaviors: [behaviorsFirst, behaviorsSec],


    /* 
    设置父子节点组件关系
    绑定两者之间的关系，并且两边都要设置
     */
    relations: {
        // 父节点组件内部设置子节点组件路径
        '../item/item': {
            // 配置项
            type: 'child',
            linked(target) {
                // target代表了节点
                // console.log('linked：', target);


                target.setData({
                    index: this.data.count++
                });


            },
            linkchange(target) {
                // console.log('linkchange', target);
            },
            unlinked(target) {
                // console.log('unlinked', target);
            }
        }
    }
})