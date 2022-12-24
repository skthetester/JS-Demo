//Mathematical Operations

var assert = require("assert");

//test suite
describe("Test Suite: Math Ops", function () {
  //test case
  it("Test Case 01: Addition", function () {
    var a = 10;
    var b = 10;
    var c = a + b;

    //assertion
    assert.equal(c, 20);
  });

  //test case
  it("Test Case 02: Subtraction", function () {
    var a = 10;
    var b = 10;
    var c = a - b;

    //assertion
    assert.equal(c, 0);
  });

  //test case
  it("Test Case 03: Multiplication", function () {
    var a = 10;
    var b = 10;
    var c = a * b;

    //assertion
    assert.equal(c, 100);
  });

  //test case
  it("Test Case 04: Division", function () {
    var a = 10;
    var b = 10;
    var c = a / b;

    //assertion
    assert.equal(c, 1);
  });

  //test case (failure)
  it("Test Case 05: Modulus", function () {
    var a = 10;
    var b = 2;
    var c = a % b;

    //assertion
    assert.equal(c, 1);
  });
});
