//Mocha Hooks

var assert = require("assert");

describe("Test Suite: Using Mocha Hooks", function () {
  //hooks
  before("BEFORE ALL TESTS", function () {
    console.log("=== BEFORE ALL TESTS ===");
  });
  beforeEach("BEFORE EACH TEST", function () {
    console.log(" - BEFORE EACH TEST - ");
  });
  after("AFTER ALL TESTS", function () {
    console.log(" - AFTER ALL TESTS - ");
  });
  afterEach("AFTER EACH TEST", function () {
    console.log("=== AFTER EACH TEST ===");
  });

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

  //test case
  it("Test Case 04: Division", function () {
    var c = a / b;

    //assertion
    assert.equal(c, 1);
  });

  //test case (failure)
  it("Test Case 05: Modulus", function () {
    b = 2;
    var c = a % b;

    //assertion
    assert.equal(c, 1);
  });
});
