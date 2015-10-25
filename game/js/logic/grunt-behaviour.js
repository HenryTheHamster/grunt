'use strict';

module.exports = {
  type: 'Grunt-Behaviour',
  func: function GameLogic () {
    var moveSpeed = 1;
    var turnSpeed = 2;
    return {
      left: function(state, data) {
        var rot = state.for('grunt-game').get('player')('rotation') + turnSpeed;
        if(rot < 0) {
          rot += 360
        }
        return {
          'grunt-game': {
            player: {
              rotation: rot
            }
          }
        }
      },
      right: function(state, data) {
        var rot = state.for('grunt-game').get('player')('rotation') - turnSpeed;
        if(rot > 360) {
          rot -= 360
        }
        return {
          'grunt-game': {
            player: {
              rotation: rot
            }
          }
        }
      },
      up: function(state, data) {
        var rot = state.for('grunt-game').get('player')('rotation');
        var pos = state.for('grunt-game').get('player')('position');
        return {
          'grunt-game': {
            player: {
              position: {
                x: pos('x') + Math.cos(rot / 360 * 2 * Math.PI) * moveSpeed,
                y: pos('y') + Math.sin(rot / 360 * 2 * Math.PI) * moveSpeed
              }
            }
          }
        }
      },
      down: function(state, data) {
        var rot = state.for('grunt-game').get('player')('rotation');
        var pos = state.for('grunt-game').get('player')('position');
        return {
          'grunt-game': {
            player: {
              position: {
                x: pos('x') + Math.cos(rot / 360 * 2 * Math.PI) * -moveSpeed,
                y: pos('y') + Math.sin(rot / 360 * 2 * Math.PI) * -moveSpeed
              }
            }
          }
        }
      }
    };
  }
};