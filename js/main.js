!(function name(window, $) {
    var $menuGroupItem = $('.menu_group');

    $(function() {
        $menuGroupItem.on('click', 'h2', function() {
            $(this).parent('.menu_group_item').toggleClass('active');
        });
    })
})(window, jQuery)