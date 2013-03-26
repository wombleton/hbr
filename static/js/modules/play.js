define([
    '/js/app.js',
    '/js/router.js',
    '/js/views/roll.js',
    '/js/views/words.js'
], function(HBR, router, RollView, WordsView) {
    HBR.module('Play', function() {
        var view;

        router.route('roll', 'roll', function() {
            HBR.mainRegion.show(new RollView({
                collection: HBR.players
            }));
        });

        router.route('words', 'words', function() {
            HBR.mainRegion.show(new WordsView());
        });
    });
});
