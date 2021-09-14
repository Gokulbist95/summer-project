const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
burger.addEventListener("click",() => {
    nav.classList.toggle('show');
});


$('.card-container').isotope({
    // options
                itemSelector: '.card',
                layoutMode: 'fitRows'
                });

                $('.food-menu ul li').click(function(){
                    $('.food-menu ul li').removeClass('active');
                    $(this).addClass('active');

                    var selector = $(this).attr('data-filter');
                $('.card-container').isotope({
                    filter:selector
                });
                return false
});