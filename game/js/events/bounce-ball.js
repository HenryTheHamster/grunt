'use strict';

module.exports = {
  type: 'OnPhysicsFrameAlways',
  func: function OnPhysicsAlways () {
    return function bullets (state, delta) {
      var bullets = state.for('grunt-game').get('player')('bullets');
      // console.log('physics');
      bullets.forEach(function(bullet) {
        bullet.position.x += bullet.velocity.x;
        bullet.position.y += bullet.velocity.y;
      });

      return {
        'grunt-game': {
          player: {
            bullet: bullets
          }
        }
      };
    };
  }
};