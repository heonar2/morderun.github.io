$(document).ready(function() {
    $('#menu_wrap > li').mouseenter(function () {
        $(this).children('.subMenu').stop().slideDown();
    });
    $('#menu_wrap > li').mouseleave(function() {
        $('.subMenu').stop().slideUp();
    });

    


    let j = 0;

    function slide () {
        if(j < 3) {
            j++;
        } else {
             j = 0;
        }
        $('#container').animate({
            left: -400*j
        }, 1000);
    }

    setInterval(slide, 5000);


    $('.none').hide();
    $('.none').slice(0, 0).css("display", "block"); 
    $("#more_btn").click(function(e){
        e.preventDefault();
        $(".none:hidden").slice(0, 1).fadeIn(100).css('display', 'block'); 
        if($(".none:hidden").length === 0){ 
            $('#more_btn').fadeOut(100); 
        }
    });

    // $('#more_btn').click(function() {
    //     let contentHeight = $('footer').height();
    // $('footer').css('height', contentHeight + 'px');
    // });


    

    

    
});