'use strict';

var entryPoint = require('ensemblejs/client');
entryPoint.loadWindow(require('window'));
entryPoint.loadDefaults();
entryPoint.loadClientFolder(require('../game/js/logic/**/*.js', {mode: 'hash'} ));
entryPoint.loadClientFolder(require('../game/js/maps/**/*.js', {mode: 'hash'} ));
entryPoint.loadClientFolder(require('../game/js/events/**/*.js', {mode: 'hash' }));
entryPoint.loadClientFolder(require('../game/js/views/**/*.js', {mode: 'hash' }));
entryPoint.set("GameMode", "game");entryPoint.set("Commit", "6aed56cb1d0ea7837baccc4ba5c6226e31ca4a68");
entryPoint.run();