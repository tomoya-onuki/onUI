$(window).on('load', function () {
    $('#mytoggle1').on('input', function () {
        $('#mytoggle1-console').text($(this).prop('checked'));
        console.log($(this).prop('checked'));
    });

    $('#mytogglebtn1').on('input', function () {
        $('#mytogglebtn1-console').text($(this).prop('checked'));
        console.log($(this).prop('checked'));
    });

    $('#myslider1 > .onui-min').on('input', function () {
        $('#myslider1-console').text($('#myslider1').val());
        console.log($('#myslider1').val());
    });
    $('#myslider1 > .onui-max').on('input', function () {
        $('#myslider1-console').text($('#myslider1').val());
        console.log($('#myslider1').val());
    });

    $('#myfontselector1 > onui-options').on('click', function (e) {
        $('#myfontselector1-console').css('font-family', $(this).attr('font'));
        console.log('%csample', `font-family:${$(this).attr('font')}`);
    });
});