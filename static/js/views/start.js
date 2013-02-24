define([
   'Backbone.Marionette',
   '/js/app.js',
   '/js/views/start-player.js',
   'text!/js/templates/start.html'
], function(Marionette, HBR, StartPlayerView, html) {
    return Marionette.CompositeView.extend({
        className: 'start container-fluid flex-container flex-vertical full-height',
        events: {
            'click [data-count]': function(e) {
                var count = Number($(e.currentTarget).attr('data-count'));

                this.adjustCount(count);

            },
            'click [data-action=next]': function() {
                debugger;
                this.collection.each(function(model) {
                    model.save();
                });
            }
        },
        initialize: function() {
            this.collection.fetch({
                success: _.bind(function(coll) {
                    if (coll.length < 3) {
                        this.adjustCount(3);
                    } else if (coll.length > 5) {
                        this.adjustCount(5);
                    }
                }, this)
            });
        },
        adjustCount: function(count) {
            while (count > this.collection.length) {
                this.collection.create({});
            }
            while (count < this.collection.length) {
                this.collection.pop().destroy();
            }
        },
        collectionEvents: {
            'change': function() {
                var valid = this.collection.all(function(model) {
                    return !model.validate();
                });

                if (valid) {
                    this.ui.next.removeAttr('disabled');
                } else {
                    this.ui.next.attr('disabled', 'disabled');
                }
            }
        },
        ui: {
            add: '[data-action=add]',
            next: '[data-action=next]'
        },
        itemView: StartPlayerView,
        itemViewContainer: '.players',
        template: _.template(html)
    });
});
