'use strict';

module.exports = {
  type: 'Grunt-Behaviour',
  func: function GameLogic () {
    var speed = 1;
    return {
      left: function(state, data) {
        var pos = state.for('grunt-game').get('player')('position');
        return {
          'grunt-game': {
            player: {
              position: {
                x: pos('x') - speed
              }
            }
          }
        }
      },
      right: function(state, data) {
        var pos = state.for('grunt-game').get('player')('position');
        return {
          'grunt-game': {
            player: {
              position: {
                x: pos('x') + speed
              }
            }
          }
        }
      },
      up: function(state, data) {
        var pos = state.for('grunt-game').get('player')('position');
        return {
          'grunt-game': {
            player: {
              position: {
                y: pos('y') + speed
              }
            }
          }
        }
      },
      down: function(state, data) {
        var pos = state.for('grunt-game').get('player')('position');
        return {
          'grunt-game': {
            player: {
              position: {
                y: pos('y') - speed
              }
            }
          }
        }
      }
    };
  }
};