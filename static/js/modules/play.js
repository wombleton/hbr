define([
    '/js/app.js',
    '/js/router.js',
    '/js/views/roll.js',
    '/js/views/words.js'
], function(HBR, router, RollView, WordsView) {
    HBR.module('Play', function() {
        var view;

        this.nextPlayers = function() {
            var players = HBR.players,
                index = players.indexOfType('word');

            // increment to get next player; first will be at 0
            index++;

            return {
                wordPlayer: players.setType(index, 'word'),
                andPlayer: players.setType(index - 1, 'and'),
                butPlayer: players.setType(index + 1, 'but')
            }
        };

        this.isClean = function() {
            _.all(this.counts, function(count) {
                return count === 0;
            });
        };

        this.isDone = function() {
            return this.counts[0] >= 4 || this.counts[2] >= 4;
        }

        this.reset = function() {
            this.counts = [0, 0, 0];
        }

        router.route('roll', 'roll', function() {
            HBR.mainRegion.show(new RollView({
                collection: HBR.players
            }));
        });

        router.route('words', 'words', function() {
            HBR.mainRegion.show(new WordsView({
                collection: HBR.players
            }));
        });
    });
});

