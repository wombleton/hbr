define([
   'Backbone.Marionette',
   '/js/app.js',
   'text!/js/templates/roll.html'
], function(Marionette, HBR, html) {
    return Marionette.View.extend({
        className: 'roll container-fluid drop-shadow',
        events: {
            'click [data-action=roll]': function() {
                _.times(3, this.roll, this);

                this.render();
            },
            'click [data-action=next]': function() {
                HBR.diffs.create({
                    action: 'set rolls',
                    data: _.pluck(HBR.state.playing, 'words')
                });
                HBR.diffs.create({
                    action: 'nav',
                    data: 'words'
                });
            }
        },
        roll: function() {
            HBR.state.playing[_.random(0, 2)].words++;
        },
        ui: {
            next: '[data-action=next]',
            roll: '[data-action=roll]'
        },
        render: function() {
            var words;

            if (HBR.state.playing) {
                this.$el.html(this.template(HBR.state));

                this.bindUIElements();

                words = _.reduce(HBR.state.playing, function(memo, player) {
                    return memo + player.words;
                }, 0);

                this.ui.roll.enable(HBR.state.playing[0].words < 4 && HBR.state.playing[2].words < 4);
                this.ui.next.enable(words > 0);
            }

            return this;
        },
        template: _.template(html)
    });
});
