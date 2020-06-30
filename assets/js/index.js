$(document).ready(function(){
    $('.coach-description').hide();
    $('.coach').first().addClass('active');
    $('.coach-description').first().show();
    $('.coach').hover(function(){
        const index = $(this).attr('data-item-index');
        $('.coach').removeClass('active');
        $(this).addClass('active');
        $('.coach-description').hide();
        $(`.coach-description[data-item-index=${index}]`).show();
    })
});