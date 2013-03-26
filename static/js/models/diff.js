define([
    'backbone',
    'backbone-localStorage'
], function(Backbone, BackboneLS) {
    return Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('Diff')
    });
});

