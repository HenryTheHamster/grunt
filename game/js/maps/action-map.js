'use strict';

module.exports = {
  type: 'ActionMap',
  deps: ['Grunt-Behaviour'],
  func: function(behaviour) {
    return {
      'left': [{target: behaviour().left}],
      'right': [{target: behaviour().right}],
      'up': [{target: behaviour().up}],
      'down': [{target: behaviour().down}],
      'x': [{target: behaviour().fire, onRelease: true}]
    };
  }
};