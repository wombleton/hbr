define([
    'backbone',
    'backbone-localStorage'
], function(Backbone, ls) {
    return Backbone.Model.extend({
        parse: function(response) {
            return response;
        },
        localStorage: new Backbone.LocalStorage('Player')
    });
});
