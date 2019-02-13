// pages/setting/setting.js
import { getInitMovieData } from '../../servie/movieData.js'
import API from '../../api/index.js'

import pubsub from '../../utils/pubsub.js'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        value: '',
        dataList: []
    },
    onReady: function(){
        // 获取设备信息
        /* let res = wx.getSystemInfoSync();
        console.log(res); */
        wx.getSystemInfo({
            success: function(res) {
                // console.log(res);
            },
        });
        getInitMovieData().then((data)=>{
            this.setData({
                dataList: data.movieList
            });
        });
        pubsub.$on('collection', ({id, collection})=>{
            let index = this.data.dataList.findIndex(item=>{
                return item.id == id;
            });
            let newitem = {...this.data.dataList[index], collection};
            this.data.dataList.splice(index, 1, newitem);
            this.setData({
                dataList: [...this.data.dataList]
            });
        });
    },
    getValue(ev){
    },
    inputAction(ev){
        this.setData({
            value: ev.detail.value
        });
    },
    touchstart(e){
        console.log(e);
    },
    goDetail(ev){
        let { itemdetail } = ev.currentTarget.dataset;
        wx.navigateTo({
            url: '/pages/moviedetail/moviedetail?name=' + itemdetail.nm + '&id=' + itemdetail.id + '&collection=' + itemdetail.collection
        })
    }
})