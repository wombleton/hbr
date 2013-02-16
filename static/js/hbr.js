require([
    'jquery',
    '/js/views/app.js',
    'text' // to allow for loading text for templates; never used directly
], function($, AppView) {
    $(document).ready(function() {
        new AppView({
            el: $('body')
        });
    });
});
