

$(document).ready(function() {

    var Height = $(window).height();

    $('#particles').height(Height);

    $(window).bind("resize", function () {
        var Height = $(window).height();

        $('#particles').height(Height);

    });


    //$('.intr_auto a').on('click', function() {
    //    console.log($('.intr_auto a').index($(this)));
    //
    //    $(this).addClass('active').siblings().removeClass('active');
    //    var index = $(this).index();
    //    console.log(index);
    //    $('.tabs-pm > div').eq(index).show().siblings().hide();
    //})



    $('body').on('click','.abouts', function() {
        var scrTop = $('.rotate-img').offset().top - 220;
        $("body,html").animate({
            scrollTop:scrTop
        },500);
    })

});

