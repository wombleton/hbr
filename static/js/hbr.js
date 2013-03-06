require([
    'jquery',
    '/js/app.js',
    'text' // to allow for loading text for templates; never used directly
], function($) {
    $.fn.enable = function(flag) {
        if (arguments.length === 0) {
            this.removeAttr('disabled');
        } else if (flag) {
            this.enable();
        } else {
            this.disable();
        }
    };

    $.fn.disable = function() {
        this.attr('disabled', 'disabled');
    };
});
