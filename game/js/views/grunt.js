'use strict';

var THREE = require('ensemblejs-threejs');

function updateBall (current, prior, ball) {
  ball.position.set(current.x, current.y, ball.position.z );
}

function updateColour (current, prior, ball) {
  if (current === 'happy') {
    ball.material.color.setHex(0xffffff);
  } else {
    ball.material.color.setHex(0xff0000);
  }

  ball.material.needsUpdate = true;
}

function theBallPosition (state) {
  return state['bouncing-ball-game'].ball.position;
}

function theBallDemeanour (state) {
  return state['bouncing-ball-game'].ball.demeanour;
}

function thePlayer (state) {
  return state['grunt-game'].player;
}

function theWorldDimensions (state) {
  return state['grunt-game'].world;
}

module.exports = {
  type: 'OnClientReady',
  deps: ['Config', 'StateTracker', 'DefinePlugin', 'CurrentState', '$'],
  func: function OnReady (config, tracker, define, currentState, $) {
    var camera;
    var renderer;
    var player;

    function createCamera (dims) {
      var camera = new THREE.OrthographicCamera(
        dims.usableWidth / -2,
        dims.usableWidth / 2,
        dims.usableHeight / 2,
        dims.usableHeight / -2,
        -2000,
        1000
      );

      camera.position.set(camera.position.x, camera.position.y, 1);
      camera.aspect = dims.ratio;
      camera.updateProjectionMatrix();

      return camera;
    }

    function updatePlayer (id, current, previous) {
      player.position.set(current.position.x, current.position.y, 1);
      camera.position.set(current.position.x, current.position.y, 1);
    }

    function createPlayer () {
      var playerState = currentState().get(thePlayer)
      var material = new THREE.MeshBasicMaterial();
      material.color.setHex(0xDA7F34);
      var geometry = new THREE.CircleGeometry(10, 100);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0,0,1);
      console.log(playerState.position.x);
      return mesh;
    }

    function createGround () {
      var material = new THREE.MeshBasicMaterial();
      material.color.setHex(0xF5F3DC);
      var texture = THREE.ImageUtils.loadTexture('/game/textures/tiles.jpg');
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set( 5, 5 );
      material.map = texture;

      var geometry = new THREE.PlaneBufferGeometry(currentState().get(theWorldDimensions).width, currentState().get(theWorldDimensions).height);
      var mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0,0,0);

      return mesh;
    }

    return function setup (dims) {
      camera = createCamera(dims);
      var scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(dims.usableWidth, dims.usableHeight);
      $()('#' + config().client.element).append(renderer.domElement);

      player = createPlayer();
      scene.add(createGround());

      scene.add(player);

      // tracker().onChangeOf(theBallPosition, updateBall, ball);
      tracker().onChangeOf(thePlayer, updatePlayer);

      define()('OnRenderFrame', function OnReady () {
        return function () {
          renderer.render(scene, camera);
        };
      });

      define()('OnResize', function OnReady () {
        return function (dims) {
          renderer.setSize(dims.usableWidth, dims.usableHeight);
          camera.aspect = dims.ratio;
          camera.updateProjectionMatrix();
        };
      });

    };
  }
};