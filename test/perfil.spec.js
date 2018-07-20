const assert = require('assert');
const user = require('../src/js/login');

describe("user", ()=>{
  it("deberia ser un objeto", ()=>{
    assert.equal(typeof user, "object");
  })
 
});  

