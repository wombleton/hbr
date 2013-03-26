define([
   'Backbone.Marionette',
   'Backbone.ModelBinder/Backbone.ModelBinder',
   '/js/app.js',
   'text!/js/templates/words.html'
], function(Marionette, ModelBinder, HBR, html) {
    return Marionette.View.extend({
        className: 'words container-fluid flex-container flex-vertical full-height',
        events: {
            'input [type=text]': function(e) {
                var $el = $(e.currentTarget);

                this.updateCount();

                e.preventDefault();
                return false;
            }
        },
        ui: {
            count: '.count',
            words: '[type=text]',
            taparea: '.tap-area'
        },
        updateCount: function() {
            var filled,
                wordsLeft = this.wordsLeft();

            this.ui.count.html(wordsLeft);

            filled = _.all(this.$('[type=text]'), function(word) {
                return $(word).val().trim();
            });

            if (wordsLeft && filled) {
                this.ui.taparea.append('<input class="input-medium" type="text">');

            }
        },
        render: function() {
            this.$el.html(this.template(HBR.state));

            this.bindUIElements();

            return this;
        },
        template: _.template(html)
    });
});
