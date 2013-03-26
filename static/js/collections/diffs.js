define([
    'backbone',
    'backbone-localStorage',
    '/js/models/diff.js'
], function(Backbone, BackboneLS, Diff) {
    return Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage('Diff'),
        model: Diff,
        saveAll: function() {
            this.invoke('save');
        }
    });
});
