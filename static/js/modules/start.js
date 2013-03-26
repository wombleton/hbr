define([
    '/js/app.js',
    '/js/router.js',
    '/js/collections/players.js',
    '/js/views/start.js'
], function(HBR, router, PlayerList, StartView) {
    HBR.module('Start', function() {
        var view,
            players;

        HBR.players = new PlayerList();

        router.route('', 'start', function() {
            HBR.mainRegion.show(new StartView({
                collection: HBR.players
            }));
        });
    });
});
