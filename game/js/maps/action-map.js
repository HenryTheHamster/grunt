'use strict';

module.exports = {
  type: 'ActionMap',
  deps: ['Grunt-Behaviour'],
  func: function(behaviour) {
    return {
      // 'primary': [{target: behaviour().changeColour, onRelease: true}]
    };
  }
};