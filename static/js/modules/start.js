define([
    '/js/app.js',
    '/js/router.js',
    '/js/collections/players.js',
    '/js/collections/sentences.js',
    '/js/views/start.js'
], function(HBR, router, PlayerList, SentenceList, StartView) {
    HBR.module('Start', function() {
        var view,
            players;

        HBR.players = new PlayerList();
        HBR.sentences = new SentenceList();

        router.route('', 'start', function() {
            HBR.mainRegion.show(new StartView({
                collection: HBR.players
            }));
        });
    });
});
