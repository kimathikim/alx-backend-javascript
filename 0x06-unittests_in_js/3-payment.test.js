const { expect } = require("chai");
const sinon = require("sinon");
const sendPayment = require("./3-payment");
const utils = require("./utils");

describe("Compute the total amount", function () {
  it("should match the calculation with Utils.calculateNumber", function () {
    const calculateNumberStub = sinon.stub(utils, "calculateNumber");
    calculateNumberStub.withArgs("SUM", 100, 20).returns(120);

    const consoleSpy = sinon.spy(console, "log");
    sendPayment(100, 20);

    const res_string = `The total is: 120`;

    expect(consoleSpy.calledWithExactly(res_string)).to.be.true;

    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
