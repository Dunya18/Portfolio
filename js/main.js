$(document).ready(function(){
    let nav_offset_top = $('.header-area').height() +50;
    
    function navbarFixed(){
            $(window).scroll(function(){
                let scroll=$(window).scrollTop();
                if(scroll>=nav_offset_top){
                    $('.header-area .main-menu').addClass('fixed');
                }else{
                    $('.header-area .main-menu').removeClass('fixed');
                }
            })
        
    }

    navbarFixed();
  /* change the navbar when clicking  */
    $('.contact').click(function(){
        $('.contact').addClass('active');
        $('.home').removeClass('active');
        $('.portfolio').removeClass('active');
        $('.service').removeClass('active');


    })
    

    $('.home').click(function(){
        $('.contact').removeClass('active');
        $('.home').addClass('active');
        $('.portfolio').removeClass('active');
        $('.service').removeClass('active');


    })
    $('.service').click(function(){
        $('.contact').removeClass('active');
        $('.home').removeClass('active');
        $('.portfolio').removeClass('active');
        $('.service').addClass('active');


    })
     $('.servsect').scroll(function(){
        $('.contact').removeClass('active');
        $('.home').removeClass('active');
        $('.portfolio').removeClass('active');
        $('.service').addClass('active');


    })
          
    $('.portfolio').click(function(){
        $('.contact').removeClass('active');
        $('.home').removeClass('active');
        $('.portfolio').addClass('active');
        $('.service').removeClass('active');


    })
})