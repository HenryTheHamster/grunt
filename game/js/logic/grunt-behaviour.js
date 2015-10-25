'use strict';

function changeColour (state) {
  var current = state.for('bouncing-ball-game').get('ball')('demeanour');
  var newDemeanour = (current === 'happy' ? 'angry' : 'happy');

  return {
    'bouncing-ball-game': {
      ball: {
        demeanour: newDemeanour
      }
    }
  };
}

module.exports = {
  type: 'Grunt-Behaviour',
  func: function GameLogic () {
    return {
      
    };
  }
};