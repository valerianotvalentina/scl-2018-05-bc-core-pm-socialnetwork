global.window = global;
global.assert = require('chai').assert;
require('../src/js/perfil');
require('./perfil.spec.js');