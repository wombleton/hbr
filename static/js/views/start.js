define([
   'Backbone.Marionette',
   '/js/app.js',
   '/js/views/start-player.js',
   'text!/js/templates/start.html'
], function(Marionette, HBR, StartPlayerView, html) {
    return Marionette.CompositeView.extend({
        className: 'start container-fluid',
        events: {
            'click [data-action=add]': function() {
                this.collection.create({});
            }
        },
        collectionEvents: {
            'add': function() {
                if (this.collection.length >=5) {
                    this.ui.add.hide();
                }
            },
            'change': function() {
                var valid = this.collection.all(function(model) {
                    return model.validate();
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
