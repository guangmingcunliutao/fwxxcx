// pages/moviedetail/moviedetail.js
import pubsub from '../../utils/pubsub.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        collection: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: options.name,
        });
        if(options.collection === 'true'){
            this.setData({
                collection: true
            });
        }
        this.id = options.id;
    },
    handleCollection(){
        this.setData({
            collection: !this.data.collection
        });
        pubsub.$emit('collection', {
            id: this.id,
            collection: this.data.collection
        });
        // 返回上一页
        // wx.navigateBack();
    }
})