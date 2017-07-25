var assert = require('assert');
var Dinosaurs = require('../dinosaurs');

describe('dinosaurs', function(){
  var dinosaur1;

  beforeEach(function() {
    dinosaur1 = new Dinosaurs();
  });

  it("Should have a type",function(){
    assert.strictEqual(dinosaur1.type, "testing");
  })
})