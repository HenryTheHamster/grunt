'use strict';

module.exports = {
  type: 'StateSeed',
  func: function() {
    return {
      'grunt-game': {
        player: {
          position: {
            x: 0,
            y: 0
          },
          rotation: 0,
          bullets: []
        },
        world: {
          width: 10000,
          height: 10000
        }
      }
    };
  }
};