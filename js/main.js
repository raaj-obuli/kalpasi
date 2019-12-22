var MENU_GROUP            = 'menu_group',
    MENU_GROUP_CLASS      = '.' + MENU_GROUP,
    H2                    = 'h2',
    MENU_GROUP_ITEM       = 'menu_group_item',
    MENU_GROUP_ITEM_CLASS = '.' + MENU_GROUP_ITEM,
    ACTIVE                = 'active',
    ACTIVE_CLASS          = '.' + ACTIVE,
    CLICK                 = 'click';

!(function name(window, $) {
    var _menuGroupElm = $(MENU_GROUP_CLASS);

    $(function() {
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
    })
})(window, jQuery)