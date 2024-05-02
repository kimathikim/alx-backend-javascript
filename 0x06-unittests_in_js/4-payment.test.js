const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./4-payment");
const utils = require("./utils");

describe("Spies and stubs", function () {
  it("similar calculations though using stub for one", () => {
    const stubUtils = sinon.stub(utils, "calculateNumber").returns(10);
    const spyConsole = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);
    expect(stubUtils.calledOnceWithExactly("SUM", 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly("The total is: 120")).to.be.false;

    stubUtils.restore();
    spyConsole.restore();
  });
});
