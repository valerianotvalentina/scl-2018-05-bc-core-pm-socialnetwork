const assert = require("assert");
const obtenerTareasLocalStorage = require('./test');
let tareas = [];

describe('obtenerTareasLocalStorage()', ()=>{
    it('debería devolver 1 si es que hay 1 elemeto en el array', ()=>{
        assert.equal(obtenerTareasLocalStorage === tareas.length, 0);
    });
    
    it('debería devolver 0 si es que no hay elementos en el array ', ()=>{
        assert.equal(obtenerTareasLocalStorage === tareas.length, 0);
    });
});