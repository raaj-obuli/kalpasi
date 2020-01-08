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
    CLICK                 = 'click';

!(function name(window, $) {
    var _menuGroupElm = $(MENU_GROUP_CLASS),
        _menuTab      = $(MENU_TABS_ID);

    $(function() {

        /* mobile menu accordion */
        _menuGroupElm.on(CLICK, H2, function() {
            var _this = $(this);

            if (_this.parent(MENU_GROUP_ITEM_CLASS).hasClass(ACTIVE) === false) {
                _menuGroupElm
                    .find(ACTIVE_CLASS)
                    .removeClass(ACTIVE);
            }

            _this
                .parent(MENU_GROUP_ITEM_CLASS)
                .toggleClass(ACTIVE);
        });

        /* desktop menu tabs */
        _menuTab.on(CLICK, ANCHOR, function(e) {
            var _this = $(this),
                target = _this.data('target');

            if (_this.hasClass(ACTIVE) === false) {
                _menuTab
                    .find(ACTIVE_CLASS)
                    .removeClass(ACTIVE);
            }

            _this.toggleClass(ACTIVE);

            $('#'+target).trigger(CLICK);

            e.preventDefault();
        });
        _menuTab.find(ANCHOR).eq(0).trigger(CLICK);
    });
})(window, jQuery)