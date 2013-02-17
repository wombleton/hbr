define([
    'backbone',
    '/js/models/player.js'
], function(Backbone, Player) {
    return Backbone.Collection.extend({
        model: Player
    });
});
