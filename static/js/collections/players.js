define([
    'backbone',
    'backbone-localStorage',
    '/js/models/player.js'
], function(Backbone, BackboneLS, Player) {
    return Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage('Player'),
        model: Player
    });
});
