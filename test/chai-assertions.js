//Chai Assertions

const chai = require("chai");

//configurations
chai.config.truncateThreshold = 0; //default = 40
chai.config.includeStack = true;
chai.config.showDiff = true;

describe("Test Suite: Chai Assertions", function () {
  it("Test Case 01: Expect", function () {
    const expect = chai.expect;
    expect("apple").to.be.equal(
      "apple",
      "Expected value doesn't match with Actual"
    );
  });

  it("Test Case 02: Should", function () {
    const should = chai.should();
    "apple".should.be.equals(
      "appel",
      "Expected value doesn't match with Actual"
    );
  });

  it("Test Case 03: Assert", function () {
    chai.assert.fail("Assertion set to fail");
  });
});
