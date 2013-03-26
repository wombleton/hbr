define([
   'Backbone.Marionette',
   '/js/app.js',
   '/js/views/start-player.js',
   'text!/js/templates/start.html'
], function(Marionette, HBR, StartPlayerView, html) {
    return Marionette.CompositeView.extend({
        className: 'start container-fluid drop-shadow',
        events: {
            'click [data-count]': function(e) {
                var count = Number($(e.currentTarget).attr('data-count'));

                this.adjustCount(count);
            },
            'click [data-action=next]': function() {
                this.collection.each(function(model, i) {
                    HBR.diffs.create({
                        action: 'add player',
                        data: {
                            coins: 0,
                            name: model.get('name'),
                            words: 0
                        }
                    });
                });
                HBR.diffs.create({
                    action: 'nav',
                    data: 'roll'
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
            this.onChange();
        },
        onRender: function() {
            this.onChange();

            this.bindUIElements();

            return this;
        },
        onChange: function() {
            var valid = this.collection.all(function(model) {
                return !model.validate();
            });

            if (_.isString(this.ui.next)) {
                return;
            }

            if (valid) {
                this.ui.next.removeAttr('disabled');
            } else {
                this.ui.next.attr('disabled', 'disabled');
            }
        },
        collectionEvents: {
            'change': 'onChange'
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
