'use strict';

var entryPoint = require('ensemblejs/client');
entryPoint.loadWindow(require('window'));
entryPoint.loadDefaults();
entryPoint.loadClientFolder(require('../game/js/logic/**/*.js', {mode: 'hash'} ));
entryPoint.loadClientFolder(require('../game/js/maps/**/*.js', {mode: 'hash'} ));
entryPoint.loadClientFolder(require('../game/js/events/**/*.js', {mode: 'hash' }));
entryPoint.loadClientFolder(require('../game/js/views/**/*.js', {mode: 'hash' }));
entryPoint.set("GameMode", "game");entryPoint.set("Commit", "155ab7b50d467b1e644bc11e2748cf5e2c441ea0");
entryPoint.run();