'use strict';

module.exports = {
  type: 'OnPhysicsFrameAlways',
  func: function OnPhysicsAlways () {
    return function bullets (state, delta) {
      var bullets = state.for('grunt-game').get('player')('bullets');
      bullets.forEach(function(bullet) {
        bullet.position.x += bullet.velocity.x;
        bullet.position.y += bullet.velocity.y;
        bullet.distance += bullet.speed;
        if(bullet.distance > 500) {
          bullet.destroy = true;
        }
      });

      for (var i = 0; i < bullets.length; ++i) {
        if (bullets[i].destroy) {
          bullets.splice(i--, 1);
        }
      }

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