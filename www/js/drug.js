(function(){
    var pageData=data;
    var contLeftNavList='',
        contRightDetail='',
        timer=null;

    renderLeftNav();

    //内容区左侧导航
    function renderLeftNav(){
        data.forEach(function (val,idx) {
            var navStr='<li class="contLeftNavList" idx='+idx+'>'+val.title+'</li>';
            if(idx==0){
                navStr='<li class="contLeftNavList active" idx='+idx+'>'+val.title+'</li>';
                renderInfoDetail(val);
            }
            contLeftNavList+=navStr;
        });
        $('.contLeftNav>ul').html(contLeftNavList);
    }

    // 内容区详情
    function renderInfoDetail(obj) {
        var str='';
        // var bannerImg=obj.info.img[0];
        var bannerImg='';
        obj.info.detail.forEach(function (val,idx) {
            str+='<div class="drugInfoList clearfix">' +
                '<span class="title fll">' +
                val.title+
                '</span><span class="detail fll">' +
                val.text +
                '</span></div>';

        });

        obj.info.img.forEach(function (val,idx) {
            bannerImg+='<div class="bannerImg" style="background-image:url('+val+')"></div>'
        })
        $('.contRight .drugInfo').html(str);
        $('.contRight .imgWrap').html(bannerImg);
        slider();
    }

    //内容切换
    $(document).on('click','.contLeftNavList',function () {

        $(this).addClass('active').siblings().removeClass('active');

        var idx=$(this).attr('idx');
        renderInfoDetail(pageData[idx]);

    })

    //轮播
    function slider(){
        var idx=0,
            total=$('.contRight .bannerImg').size();

        clearInterval(timer);
        $('.contRight .bannerImg').eq(idx).animate({'opacity':1},1000).siblings().animate({'opacity':0},1000);

        timer=setInterval(function () {

            $('.contRight .bannerImg').eq(idx).animate({'opacity':1},1000).siblings().animate({'opacity':0},1000);
            idx++;
            if(idx>=total){
                idx=0;
            }
        },3000)
    }

})();


