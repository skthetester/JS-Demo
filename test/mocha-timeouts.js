//Mathematical Operations

var assert = require("assert");

//test suite
describe("Test Suite: Retry and Timeouts", function () {
  var a = 10;
  var b = 10;
  this.timeout(500);

  

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

  //test case (failure)
  it("Test Case 05: Modulus", function () {
    b = 2;
    var c = a % b;

    this.retries(5);
    //assertion
    assert.equal(c, 1);
  });

  //test case
  it("Test Case 01: Addition", function (done) {
    setTimeout(done, 3000);
    var c = a + b;

    //assertion
    assert.equal(c, 20);
  });

});
