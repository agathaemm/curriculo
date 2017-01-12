$( document ).ready(function(){

    if ( $( window ).scrollTop() > 100 )
        $('#navbar').addClass('active');
    else
        $('#navbar').removeClass('active');

    $(window).scroll(function(){
        if ( $( window ).scrollTop() > 100 )
            $('#navbar').addClass('active');
        else
            $('#navbar').removeClass('active');
    })

    $('.navigation').click(function( e ){
        e.preventDefault();
        $('.navigation').removeClass('active');
        $(this).addClass('active');
        id = $(this).attr('href');
        $('body').animate( { scrollTop: $('#'+id).position().top }, 300);

        return false;
    })

});