const assert = require("assert"); //mocha
const localStorage = require('./test');
let tareas = [];

describe('localStorage()', ()=>{
    it('debería devolver 1 si es que hay 1 elemeto en el array', ()=>{
        assert.equal(localStorage === tareas.length, 0);
    });
    
    it('debería devolver 0 si es que no hay elementos en el array ', ()=>{
        assert.equal(localStorage === tareas.length, 0);
    });
});