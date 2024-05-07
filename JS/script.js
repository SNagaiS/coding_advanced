'use strict'
let swiper = new Swiper('.swiper', {
    // オプション設定
    loop: true,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },
    //ページネーション表示設定
    pagination: {
        el: '.swiper-pagination', //ページネーション要素
        type: 'bullets', //ページネーションの種類
        clickable: true, //クリックに反応させる
    },


    //ナビゲーションボタン（矢印）表示の設定
    navigation: {
        nextEl: '.swiper-button-next', //「次へボタン」要素指定
        prevEl: '.swiper-button-prev', //「前へボタン」要素指定
    },


    //スクロールバー表示の設定
    scrollbar: {
        el: '.swiper-scrollbar', //要素の指定
    },
});
// clickEvent
$('.btn0').click(function () {
    $('.btnx').slideToggle();
})
$('.btn1').click(function () {
    $('.btny').slideToggle();
})
$('.btn2').click(function () {
    $('.btnz').slideToggle();
})
$(function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
        $(".menu").hide();
        $("burger").show();
    }
});
$('.burger').click(function () {
    $('.menu').slideToggle();
})
// fade
$(function () {
    $(window).scroll(function () {
        $('.scrollAnimation').each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 150) {
                $(this).addClass('scrollin');
            }
        });
    });
});
