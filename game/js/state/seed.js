'use strict';

module.exports = {
  type: 'StateSeed',
  func: function() {
    return {
      'grunt-game': {
        player: {
          position: {
            x: 100,
            y: 100
          }
        },
        world: {
          width: 1000,
          height: 1000
        }
      }
    };
  }
};