define([
    'backbone',
    'backbone-localStorage',
    'underscore.string'
], function(Backbone, BackboneLS, _s) {
    return Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('Sentence'),
        validate: function() {
            return null;
        },
        wordsLeft: function() {
            return this.get(this.get('player')).words;
        },
        setWordCount: function() {
            var count = this.count(),
                n = this.get(this.get('player')).words;

            this.set('count', count + n);
        },
        getFreeWord: function() {
            var player = this.get('player'),
                words;

            words = {
                wordPlayer: 'robot',
                andPlayer: 'and',
                butPlayer: 'but'
            };
            return words[player];
        }
    });
});
