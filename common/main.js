$('.slider').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
});

$('.slider_02').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    arrows: true,
    dots: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.slider_03').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: false,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});


$("#navibtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#menu a").click(function () {//ナビゲーションのリンクがクリックされたら
    $("#navibtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

$(function () {
    $('.accordion_header').click(function () {
        $(this).next('.accordion_inner').slideToggle();
        $(this).toggleClass("open");
    });
});


$(function () {
    $(".md-btn").each(function () {
        $(this).on('click', function (e) {
            e.preventDefault();
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).find('.md-overlay,.md-contents').fadeIn();
        });
    });
    $('.md-close').on('click', function () {
        $('.md-overlay,.md-contents').fadeOut();
    });
});


function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 100){
		$('#page-top').removeClass('DownMove');
		$('#page-top').addClass('UpMove');
	}else{
		if($('#page-top').hasClass('UpMove')){
			$('#page-top').removeClass('UpMove');
			$('#page-top').addClass('DownMove');
		}
	}
}

$(window).scroll(function () {
	PageTopAnime();
});

$('#page-top').click(function () {
	var scroll = $(window).scrollTop();
	if(scroll > 0){
		$(this).addClass('floatAnime');
        $('body,html').animate({
            scrollTop: 0
        }, 2000,function(){
            $('#page-top').removeClass('floatAnime');
        });	
	}
    return false;
});
