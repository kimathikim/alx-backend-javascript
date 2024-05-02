const { expect } = require("chai");
const sinon = require("sinon");
const sendPayment = require("./3-payment");
const utils = require("./utils");

describe("Compute the total amount", function () {
  it("The stings should match", function () {
    total = utils.calculateNumber("SUM", 100, 20);
    res_string = `The total is: ${total}`;

    const consoleSpy = sinon.spy(console, "log");
    sendPayment(100, 20);
    expect(consoleSpy.calledWith(res_string)).to.be.true;

    consoleSpy.restore();
  });
});
