// Component/item/item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        isActive: false,
        index: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tapItem() {
            let list = this.getRelationNodes('../list/list')[0];
            list.getNodes(this.data.index);
        }
    },

    /* 
    设置父子节点组件关联
     */
    relations: {
        '../list/list': {
            type: 'parent',
            linked(target) {
                // target代表了节点
                // console.log('linked：', target);
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