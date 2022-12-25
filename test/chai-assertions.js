//Chai Assertions

const chai = require("chai");

describe("Test Suite: Chai Assertions", function(){
  it("Test Case 01: Expect", function(){
    expect('apple').to.be.equal('apple', "Expected value matches with Actual");
  });
  
  it("Test Case 02: Assert", function(){
    assert.fail("Assertion set to fail");
  });
});
