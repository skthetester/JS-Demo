//Mathematical Operations

var assert = require("assert");

//test suite
describe("Test Suite: Features", function () {
  var a = 10;
  var b = 10;

  //test case
  it("Test Case 01: Addition", function () {
    var c = a + b;

    //assertion
    assert.equal(c, 20);
  });

  //test case
  it("Test Case 02: Subtraction", function () {
    var c = a - b;

    //assertion
    assert.equal(c, 0);
  });

  //test case
  it("Test Case 03: Multiplication", function () {
    var c = a * b;

    //assertion
    assert.equal(c, 100);
  });

  //test case -  no call back function
  it("Test Case 04: Division");
});
