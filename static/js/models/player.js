define([
    'backbone',
    'underscore.string',
    'backbone-localStorage'
], function(Backbone, _s, ls) {
    return Backbone.Model.extend({
        parse: function(response) {
            return response;
        },
        localStorage: new Backbone.LocalStorage('Player'),
        validate: function() {
            return !!_s.trim(this.get('name'));
        }
    });
});
