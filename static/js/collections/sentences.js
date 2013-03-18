define([
    'backbone',
    'backbone-localStorage',
    '/js/models/sentence.js'
], function(Backbone, BackboneLS, Sentence) {
    return Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage('Sentence'),
        model: Sentence,
        getActive: function(callback) {
            this.onceLoaded(_.bind(function() {
                var active = this.detect(function(model) {
                    return !model.get('finished');
                });
                if (active) {
                    callback(active);
                } else {
                    callback(this.create());
                }
            }, this));
        },
        onceLoaded: function(callback) {
            if (this.length) {
                callback();
            } else {
                this.fetch({
                    success: callback
                });
            }
        }
    });
});

