//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin() {
    var width = $(window).width();
    if (width <= 768) { //横幅が768px以下の場合 $(".has-child>a").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
        $(".has-child>a").on('click', function() { //has-childクラスがついたaタグをクリックしたら
            var parentElem = $(this).parent(); // aタグから見た親要素のliを取得し
            $(parentElem).toggleClass('active'); //矢印方向を変えるためのクラス名を付与して
            $(parentElem).children('ul').stop().slideToggle(500); //liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
            return false; //リンクの無効化
        });
    } else { //横幅が768px以上の場合
        $(".has-child>a").off('click'); //has-childクラスがついたaタグのonイベントをoff(無効)にし
        $(".has-child>a").removeClass('active'); //activeクラスを削除
        $('.has-child').children('ul').css("display", ""); //スライドトグルで動作したdisplayも無効化にする
    }
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
    mediaQueriesWin(); /* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function() {
    mediaQueriesWin(); /* ドロップダウンの関数を呼ぶ*/
});

$('.slider').slick({
    autoplay: true, //自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
    speed: 1000, //スライドの動きのスピード。初期値は300。
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1, //スライドを画面に3枚見せる
    slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
    arrows: true, //左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
    dots: true, //下部ドットナビゲーションの表示
    pauseOnFocus: false, //フォーカスで一時停止を無効
    pauseOnHover: false, //マウスホバーで一時停止を無効
    pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
});

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) { //上から100pxスクロールしたら
        $('#page-top').removeClass('DownMove'); //#page-topについているDownMoveというクラス名を除く
        $('#page-top').addClass('UpMove'); //#page-topについているUpMoveというクラス名を付与
    } else {
        if ($('#page-top').hasClass('UpMove')) { //すでに#page-topにUpMoveというクラス名がついていたら
            $('#page-top').removeClass('UpMove'); //UpMoveというクラス名を除き
            $('#page-top').addClass('DownMove'); //DownMoveというクラス名を#page-topに付与
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function() {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function() {
    PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function() {
    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll > 0) {
        $(this).addClass('floatAnime'); //クリックしたらfloatAnimeというクラス名が付与
        $('body,html').animate({
            scrollTop: 0
        }, 2000, function() { //スクロールの速さ。数字が大きくなるほど遅くなる
            $('#page-top').removeClass('floatAnime'); //上までスクロールしたらfloatAnimeというクラス名を除く
        });
    }
    return false; //リンク自体の無効化
});
