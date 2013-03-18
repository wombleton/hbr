define([
    'backbone',
    'backbone-localStorage',
    '/js/models/player.js'
], function(Backbone, BackboneLS, Player) {
    return Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage('Player'),
        model: Player,
        indexOfType: function(type) {
            var model = this.getByType(type);

            return this.models.indexOf(model);
        },
        getByType: function(type) {
            return this.detect(function(model) {
                return model.get('type') === type;
            });

        },
        setType: function(index, type) {
            // clear old type
            var oldType = this.at(this.indexOfType(type)),
                model;

            if (oldType) {
                oldType.unset('type');
                oldType.unset('words');

                oldType.save();
            }

            if (index < 0) {
                index = this.length - 1;
            } else if (index >= this.length) {
                index = 0;
            }

            var model = this.at(index);

            model.set({
                type: type,
                words: 0
            });

            model.save();

            return model;
        },
        saveAll: function() {
            this.each(function(model) {
                model.save();
            });
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
