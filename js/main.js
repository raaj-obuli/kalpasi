var MENU_GROUP            = 'menu_group',
    MENU_GROUP_CLASS      = '.' + MENU_GROUP,
    ANCHOR                = 'a',
    H2                    = 'h2',
    MENU_GROUP_ITEM       = 'menu_group_item',
    MENU_GROUP_ITEM_CLASS = '.' + MENU_GROUP_ITEM,
    ACTIVE                = 'active',
    ACTIVE_CLASS          = '.' + ACTIVE,
    MENU_TABS             = 'menu_tabs',
    MENU_TABS_ID          = '#' + MENU_TABS,
    CLICK                 = 'click',
    isMobile              = false;

!(function name(window, $) {
    var _window       = $(window),
        _menuGroupElm = $(MENU_GROUP_CLASS),
        _menuTab      = $(MENU_TABS_ID);

    function toggleMenu(element) {
        var _this = $(element);

        if (_this.parent(MENU_GROUP_ITEM_CLASS).hasClass(ACTIVE) === false) {
            _menuGroupElm
                .find(ACTIVE_CLASS)
                .removeClass(ACTIVE);
        }

        _this
            .parent(MENU_GROUP_ITEM_CLASS)
            .toggleClass(ACTIVE);
    }

    $(function() {

        /* mobile menu accordion */
        _menuGroupElm.on(CLICK, H2, function() {
            if (isMobile) {
                toggleMenu(this);
            }
        });

        /* desktop menu tabs */
        _menuTab.on(CLICK, ANCHOR, function(e) {
            var _this          = $(this),
                target         = _this.data('target'),
                _targetElement = $('#'+target);

            toggleMenu(_targetElement);

            if (_this.hasClass(ACTIVE) === false) {
                _menuTab
                    .find(ACTIVE_CLASS)
                    .removeClass(ACTIVE);
            }

            _this.toggleClass(ACTIVE);

            e.preventDefault();
        });

        if (!isMobile) {
            _menuTab.find(ANCHOR).eq(0).trigger(CLICK);
        }
    });

    function windowResize() {
        isMobile = !!(_window.width() < 1024);
    }
    _window.resize(windowResize);
    windowResize();
})(window, jQuery);