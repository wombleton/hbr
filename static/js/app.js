define([
    'Backbone.Marionette',
    '/js/collections/diffs.js'
], function(Marionette, DiffList) {
    var data,
        HBR = new Marionette.Application();

    HBR.diffs = new DiffList();

    function handle(diff) {
        var action = diff.get('action'),
            data = diff.get('data');

        if (action === 'add player') {
            state.players.push(diff.get('data'));
        } else if (action === 'nav') {
            if (data === 'roll') {
                nextTurn();
            } else if (data === 'words') {
            }

            HBR.router.navigate(data, true);
        }
    }

    function nextTurn() {
        var i,
            playing;

        state.turn++;

        i = state.turn % state.players.length;

        if (i === 0) {
            playing = state.players.slice(-1);
            playing = playing.concat(state.players.slice(0, 2));
        } else {
            playing = state.players.slice(i, i + 3);
            playing = state.players.slice(0, 3 - playing.length);
        }
        state.playing = playing;
    }

    HBR.diffs.on('add', handle);

    HBR.state = state = {
        words: [0, 0, 0],
        players: [],
        turn: -1, // so first "next turn" is at index 0
        sentences: []
    };

    HBR.addInitializer(function() {
        require([
            '/js/modules/start.js',
            '/js/modules/play.js'
        ], function() {
            Backbone.history.start();

            HBR.diffs.fetch({
                success: function(coll) {
                    HBR.router.navigate('', true);
                    coll.each(function(diff) {
                        handle(diff);
                    });
                }
            });

        });
    });

    HBR.start();

    HBR.addRegions({
        mainRegion: '#main'
    });

    this.HBR = HBR;

    return HBR;
});
