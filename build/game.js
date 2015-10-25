'use strict';

var entryPoint = require('ensemblejs/client');
entryPoint.loadWindow(require('window'));
entryPoint.loadDefaults();
entryPoint.loadClientFolder(require('../game/js/logic/**/*.js', {mode: 'hash'} ));
entryPoint.loadClientFolder(require('../game/js/maps/**/*.js', {mode: 'hash'} ));
entryPoint.loadClientFolder(require('../game/js/events/**/*.js', {mode: 'hash' }));
entryPoint.loadClientFolder(require('../game/js/views/**/*.js', {mode: 'hash' }));
entryPoint.set("GameMode", "game");entryPoint.set("Commit", "b43376af3b93d3cfc66d6b8473c2640d4fb463c2");
entryPoint.run();