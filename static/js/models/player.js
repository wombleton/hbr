define([
    'backbone',
    'backbone-localStorage',
    'underscore.string'
], function(Backbone, BackboneLS, _s) {
    return Backbone.Model.extend({
        parse: function(response) {
            return response;
        },
        localStorage: new Backbone.LocalStorage('Player'),
        validate: function() {
            if (!_s.trim(this.get('name'))) {
                return 'name required';
            }
            return null;
        }
    });
});
