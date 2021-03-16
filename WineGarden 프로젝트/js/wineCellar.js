$(document).ready(function () {

    $(window).scroll(function () {
        var arr = ["#cellar1 img", "#cellar1 h3", "#cellar1 p", "#cellar2 img", "#cellar2 h3", "#cellar2 p", "#cellar3 img", "#cellar3 h3", "#cellar3 p"
            , "#cellar4 img", "#cellar4 h3", "#cellar4 p", "#cellar5 img", "#cellar5 h3", "#cellar5 p"];
        for (var i = 0; i < arr.length; i++) {

            $(arr[i]).each(function (i) {

                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                if (bottom_of_window > bottom_of_element) {
                    $(this).animate({ 'opacity': '1', 'margin-top': '0%' }, 1500);
                }

            });

        }
    });

    $("#btn").click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

});