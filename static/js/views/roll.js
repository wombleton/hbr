define([
   'Backbone.Marionette',
   '/js/app.js',
   'text!/js/templates/roll.html'
], function(Marionette, HBR, html) {
    return Marionette.View.extend({
        className: 'start container-fluid flex-container flex-vertical full-height',
        events: {
            'click [data-action=roll]': function() {
                _.times(3, this.roll, this);

                this.validate();
            },
            'click [data-action=next]': function() {
                HBR.router.navigate('words', true);
            }
        },
        initialize: function() {
            this.on('app:next-turn', function() {
                _.extend(this, HBR.Play.nextPlayers());
            });
        },
        roll: function() {
            var keys = ['wordPlayer', 'andPlayer', 'butPlayer'],
                player;

            player = this[keys[_.random(0, 2)]];

            player.set('words', player.get('words') + 1);
        },
        validate: function() {
            this.render();

            this.ui.next.enable();

            this.ui.roll.enable(this.andPlayer.get('words') < 4 && this.butPlayer.get('words') < 4);
        },
        ui: {
            next: '[data-action=next]',
            roll: '[data-action=roll]'
        },
        doRender: function() {
            this.wordPlayer = HBR.players.getByType('word');
            this.andPlayer = HBR.players.getByType('and');
            this.butPlayer = HBR.players.getByType('but');

            if (this.wordPlayer) {
                this.$el.html(this.template({
                    wordPlayer: this.wordPlayer.toJSON(),
                    andPlayer: this.andPlayer.toJSON(),
                    butPlayer: this.butPlayer.toJSON()
                }));

                this.bindUIElements();
            } else {
                HBR.router.navigate('', true);
            }
        },
        render: function() {
            if (HBR.players.length) {
                this.doRender();
            } else {
                HBR.players.fetch({
                    success: _.bind(this.doRender, this)
                });
            }

            return this;
        },
        template: _.template(html)
    });
});
