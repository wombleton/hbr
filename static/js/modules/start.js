define([
    '/js/app.js',
    '/js/router.js',
    '/js/collections/players.js',
    '/js/views/start.js'
], function(HBR, router, PlayerList, StartView) {
    HBR.module('Start', function() {
        var view,
            players;

        players = new PlayerList();
        players.create({});
        players.create({});
        players.create({});
        view = new StartView({
            collection: players
        });

        router.route('', 'start', function() {
            HBR.mainRegion.show(view);
        });
    });
});
