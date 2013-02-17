define([
   'Backbone.Marionette',
   '/js/app.js',
   '/js/views/start-player.js',
   'text!/js/templates/start.html'
], function(Marionette, HBR, StartPlayerView, html) {
    return Marionette.CollectionView.extend({
        className: 'start container-fluid',
        events: {
            'click [data-action=add-player]': 'addPlayer'
        },
        addPlayer: function() {
            this.collection.create({});
        },
        itemView: StartPlayerView,
        template: _.template(html),
        onRender: function() {
            if (this.collection.length < 5) {
                this.$el.append(this.template());
            }
        }
    });
});
