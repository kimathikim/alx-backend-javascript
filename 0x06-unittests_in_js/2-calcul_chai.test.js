const chai = require("chai");
const { expect } = chai;

const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
  it("should return 5", function () {
    expect(calculateNumber("SUM", 1, 4)).to.equal(5);
  });

  it("return 3", function () {
    expect(calculateNumber("SUBTRACT", 5, 2)).to.equal(3);
  });
  it("return 5", function () {
    expect(calculateNumber("DIVIDE", 15, 3)).to.equal(5);
  });
  it("return Error", function () {
    expect(calculateNumber("DIVIDE", 3.3, 0)).to.equal("Error");
  });
});
