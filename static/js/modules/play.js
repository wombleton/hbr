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

        router.route('roll', 'roll', function() {
            HBR.mainRegion.show(new RollView({
                collection: HBR.players
            }));
        });

        router.route('words', 'words', function() {
            HBR.sentences.getActive(function(sentence) {
                HBR.players.onceLoaded(function() {
                    if (!sentence.get('player')) {
                        sentence.set({
                            player: 'wordPlayer',
                            wordPlayer: HBR.players.getByType('word'),
                            andPlayer: HBR.players.getByType('and'),
                            butPlayer: HBR.players.getByType('but'),
                            words: []
                        });
                        sentence.save();
                    }
                    HBR.mainRegion.show(new WordsView({
                        model: sentence
                    }));
                });
            });
        });
    });
});

