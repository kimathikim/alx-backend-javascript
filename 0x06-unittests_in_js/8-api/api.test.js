const { expect } = require("chai");
const request = require("request");

describe("Index Page", () => {
  const options = {
    url: "http://localhost:7865",
    method: "GET",
  };

  it("Status Code: 200 ", (done) => {
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);

      done();
    });
  });

  it("text: Welcome to the payment system", (done) => {
    request(options, (error, response, body) => {
      expect(body).to.equal("Welcome to the payment system\n");

      done();
    });
  });
});
