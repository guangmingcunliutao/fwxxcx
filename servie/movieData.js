import API from '../api/index.js'

export function getInitMovieData() {
    return new Promise((reslove, reject) => {
        wx.request({
            url: API.MOVIE_API,
            method: 'GET',
            data: {
                token: ''
            },
            success({ data: { movieList, movieIds}, statusCode}) {
                // console.log(data);
                if(statusCode !== 200) return;
                movieList = movieList.map((item)=>{
                    item.img = item.img.replace(/w.h/, '64.90');
                    item.collection = false;
                    return item;
                });
                reslove({movieIds, movieList});
            },
            fail: function(error) {
                console.log('请求失败');
                reject(error);
            }
        });
    });
}