const { expect } = require("chai");
const request = require("request");

describe("Index Page", () => {
  it("Status Code: 200 : text: Welcome to the payment system", (done) => {
    const options = {
      url: "http://localhost:7865",
      method: "GET",
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system\n");

      done();
    });
  });
});
