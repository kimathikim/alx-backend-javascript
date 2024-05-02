const getPaymentTokenFromApi = require("./6-payment_token");

const { expect } = require("chai");

// testing getPaymentToken function asynchrounously
describe("getPaymentToken", () => {
  describe("check the truth return from the promise", () => {
    it("should resolve correctly", (done) => {
      getPaymentTokenFromApi(true)
        .then((res) => {
          expect(res).to.include({ data: "Successful response from the API" });
          done();
        })
        .catch((err) => done(err));
    });
  });
});
