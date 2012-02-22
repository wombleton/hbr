(function() {
  _.mixin(_.string.exports());
  Ext.setup({
    onReady: function() {
      return new HBR.Main();
    }
  });
  Ext.regModel('Game', {
    fields: ['id', 'type', 'count'],
    proxy: {
      id: 'hbrgame',
      type: 'localstorage'
    }
  });
  Ext.ns('HBR');
  HBR.Players = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      var i, items, _ref;
      if (cfg == null) {
        cfg = {};
      }
      items = [];
      Ext.applyIf(cfg, {
        items: items,
        layout: 'hbox'
      });
      for (i = 1, _ref = Math.ceil(2 + 3 * Math.random()); 1 <= _ref ? i <= _ref : i >= _ref; 1 <= _ref ? i++ : i--) {
        items.push(new Ext.Panel({
          flex: 1,
          html: "Player " + i + "<br>0 coins"
        }));
      }
      return HBR.Players.superclass.constructor.call(this, cfg);
    }
  });
  Ext.ns('HBR');
  HBR.Roller = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      if (cfg == null) {
        cfg = {};
      }
      Ext.applyIf(cfg, {
        cls: 'roller',
        dockedItems: [
          {
            dock: 'top',
            items: [
              {
                flex: 1,
                html: 'buts'
              }, {
                flex: 1,
                html: 'words'
              }, {
                flex: 1,
                html: 'ands'
              }
            ],
            layout: 'hbox'
          }, {
            dock: 'bottom',
            items: new Ext.Button({
              text: 'Done',
              ui: 'confirm'
            })
          }
        ],
        items: [
          {
            items: [
              {
                xtype: 'spacer'
              }, {
                handler: function() {
                  return this.roll(1);
                },
                scope: this,
                text: '1',
                ui: 'round'
              }, {
                handler: function() {
                  return this.roll(2);
                },
                scope: this,
                text: '2',
                ui: 'round'
              }, {
                handler: function() {
                  return this.roll(3);
                },
                scope: this,
                text: '3',
                ui: 'round'
              }, {
                xtype: 'spacer'
              }
            ],
            layout: {
              pack: 'center'
            },
            ui: 'light',
            xtype: 'toolbar'
          }
        ],
        store: Ext.StoreMgr.get('game'),
        title: 'Roll'
      });
      HBR.Roller.superclass.constructor.call(this, cfg);
      this.on('render', function() {
        return this.el.on('singletap', function(e) {
          var fly;
          fly = Ext.fly(e.target);
          if (fly.is('li')) {
            return this.roll(fly.getAttribute('data-count'));
          }
        }, this);
      }, this);
    },
    rollDie: function() {
      var roll;
      roll = Math.random();
      if (roll < (1 / 3)) {
        return this.addDie('but');
      } else if (((1 / 3) < roll && roll < (2 / 3))) {
        return this.addDie('word');
      } else {
        return this.addDie('and');
      }
    },
    addDie: function(type) {
      var wordCount;
      wordCount = this.up('.main').store.get('type', type);
      debugger;
    },
    getWordCountStore: function() {},
    roll: function(dice) {
      var i, _ref, _results;
      _results = [];
      for (i = 1, _ref = Number(dice); 1 <= _ref ? i <= _ref : i >= _ref; 1 <= _ref ? i++ : i--) {
        _results.push(this.rollDie());
      }
      return _results;
    }
  });
  Ext.ns('HBR');
  HBR.WordCount = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      if (cfg == null) {
        cfg = {};
      }
      Ext.applyIf(cfg, {
        cls: 'word-count',
        count: 0,
        items: new HBR.FreeWord(cfg.type)
      });
      return HBR.WordCount.superclass.constructor.call(this, cfg);
    },
    addWord: function() {
      this.setCount(++this.count);
      this.add(new HBR.BlankWord());
      return this.doLayout();
    },
    setCount: function(count) {
      this.count = count;
      if (this.type !== 'Robot' && this.count >= 4) {
        return this.fireEvent('wordoverflow');
      }
    }
  });
  Ext.ns('HBR');
  HBR.Sentence = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      if (cfg == null) {
        cfg = {};
      }
      cfg = Ext.applyIf(cfg, {
        active: false,
        cls: 'sentence',
        flex: 1,
        html: 'Active sentence',
        layout: 'auto'
      });
      return HBR.Sentence.superclass.constructor.call(this, cfg);
    },
    activate: function() {
      return this.active = true;
    },
    deactivate: function() {
      return this.active = false;
    },
    getEmptyWord: function() {
      return _.find(this.query('.editable-word'), function(word) {
        return _(word.getValue()).trim() === '';
      });
    },
    focusEmptyWord: function() {
      var _ref;
      return (_ref = this.getEmptyWord()) != null ? _ref.focus() : void 0;
    },
    hasEmptyWord: function() {
      return !!this.getEmptyWord();
    }
  });
  Ext.reg('sentence', HBR.Sentence);
  Ext.ns('HBR');
  HBR.Story = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      var items;
      if (cfg == null) {
        cfg = {};
      }
      items = [];
      Ext.applyIf(cfg, {
        items: items,
        layout: {
          align: 'stretch',
          type: 'vbox'
        }
      });
      items.push(new HBR.Sentence({
        html: 'Happy Birthday, Robot!'
      }), new HBR.Sentence({
        active: true
      }));
      return HBR.Story.superclass.constructor.call(this, cfg);
    },
    addBlankWord: function(word) {
      var sentence;
      sentence = _.last(this.query('.sentence'));
      if (sentence.hasEmptyWord()) {
        return sentence.focusEmptyWord();
      } else {
        sentence.add(new HBR.EditableWord());
        sentence.doLayout();
        sentence.focusEmptyWord();
        return word.destroy();
      }
    }
  });
  Ext.reg('story', HBR.Story);
  Ext.ns('HBR');
  HBR.Word = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      if (cfg == null) {
        cfg = {};
      }
      return HBR.Word.superclass.constructor.call(this, cfg);
    },
    getStory: function() {
      return Ext.ComponentQuery.query('story')[0];
    }
  });
  Ext.ns('HBR');
  HBR.BlankWord = Ext.extend(HBR.Word, {
    constructor: function() {
      return HBR.BlankWord.superclass.constructor.call(this, {
        cls: 'blank-word',
        listeners: {
          render: function() {
            return this.el.on('singletap', function() {
              return this.getStory().addBlankWord(this);
            }, this);
          },
          scope: this
        },
        html: 'Word'
      });
    }
  });
  Ext.ns('HBR');
  HBR.EditableWord = Ext.extend(Ext.form.Text, {
    constructor: function() {
      return HBR.EditableWord.superclass.constructor.call(this, {
        cls: 'editable-word',
        width: 220
      });
    }
  });
  Ext.reg('editable-word', HBR.EditableWord);
  Ext.ns('HBR');
  HBR.FreeWord = Ext.extend(HBR.Word, {
    constructor: function(word) {
      return HBR.FreeWord.superclass.constructor.call(this, {
        cls: 'free-word',
        listeners: {
          render: function() {
            return this.el.on('singletap', function(e) {
              return this.getStory().addFreeWord('Robot');
            }, this);
          },
          scope: this
        },
        html: word
      });
    }
  });
  Ext.ns('HBR');
  HBR.Main = Ext.extend(Ext.Panel, {
    constructor: function(cfg) {
      if (cfg == null) {
        cfg = {};
      }
      this.andCount = new HBR.WordCount({
        dock: 'right',
        layout: 'vbox',
        listeners: {
          wordoverflow: function() {
            return this.roller.disable();
          },
          scope: this
        },
        type: 'but'
      });
      this.butCount = new HBR.WordCount({
        dock: 'left',
        layout: 'vbox',
        listeners: {
          wordoverflow: function() {
            return this.roller.disable();
          },
          scope: this
        },
        type: 'and'
      });
      this.wordCount = new HBR.WordCount({
        dock: 'bottom',
        layout: 'hbox',
        type: 'Robot'
      });
      this.roller = new HBR.Roller({
        listeners: {
          diceroll: function(type) {
            if (type === 'but') {
              return this.butCount.addWord();
            } else if (type === 'and') {
              return this.andCount.addWord();
            } else {
              return this.wordCount.addWord();
            }
          },
          scope: this
        }
      });
      this.store = new Ext.data.Store({
        id: 'game',
        model: 'Game'
      });
      this.players = new HBR.Players({
        dock: 'top'
      });
      this.story = new HBR.Story();
      Ext.applyIf(cfg, {
        fullscreen: true,
        items: this.roller,
        layout: 'card'
      });
      return HBR.Main.superclass.constructor.call(this, cfg);
    }
  });
  Ext.reg('main', HBR.Main);
}).call(this);
