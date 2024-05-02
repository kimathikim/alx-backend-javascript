const sinon = require("sinon");
const { expect } = require("chai");
const sendPaymentRequestToApi = require("./5-payment");

describe("how to use hooks", () => {
  // have one spy on the console.log method
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(console, "log");
  });
  afterEach(() => {
    consoleSpy.restore();
  });

  it("should log the correct total is 120", () => {
    sendPaymentRequestToApi(100, 20);

    // check the function is called once
    expect(consoleSpy.calledOnceWithExactly("The total is: 120")).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it("should log the correct total is 20", () => {
    sendPaymentRequestToApi(10, 10);

    // check the function is called once
    expect(consoleSpy.calledOnceWithExactly("The total is: 20")).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
