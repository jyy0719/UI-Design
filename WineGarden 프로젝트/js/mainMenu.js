$(".menubar").hover(function () {//메뉴바에 hover발생시 서브메뉴 슬라이드
    $(".subMenu").stop().slideDown(400);
}, function () {
    $(".subMenu").stop().slideUp(600);
});
$(".subMenu").hover(function () {
    $(".subMenu").stop().slideDown(400);
}, function () {
    $(".subMenu").stop().slideUp(600);
});
$('.header a,.subMenu a').hover(function() {
    $('.header a.unprepared,.subMenu a.unprepared').css('color','#bbb');
    $('.header a.prepared,.subMenu a.prepared').css('color','rgb(255, 100, 100)');
}, function() {
    $('.header a.unprepared,.subMenu a.unprepared').css('color','whitesmoke');
    $('.header a.prepared,.subMenu a.prepared').css('color','whitesmoke');
});

$(".subMenu ul li ul").hover(function () {//서브메뉴 ul에 hover되면 메뉴바에 빨간 줄 효과 주기
    num = $(this).get(0).className.substr(3, 1);//hover된 ul의 클래스 넘버 추출
    $("div.menubar ul.nav li a.menu" + num).toggleClass("linebar");//동일한 넘버의 메뉴바 클래스에 css적용된 클래스 입력
});