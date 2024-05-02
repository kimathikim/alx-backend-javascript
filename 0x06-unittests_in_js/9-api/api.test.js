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
      expect(body).to.equal("Welcome to the payment system");

      done();
    });
  });
  it("id is a  number", (done) => {
    const options = {
      url: "http://localhost:7865/cart/12",
      method: "GET",
    };

    describe("GET /available_payments JSON parsed", () => {
      it("Responds with 200 and correct JSON object when parsed", (done) => {
        const options = {
          url: "http://localhost:7865/available_payments",
          method: "GET",
        };

        request(options, function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          const bodyParsed = JSON.parse(body);

          const referenceBody = {
            payment_methods: {
              credit_cards: true,
              paypal: false,
            },
          };

          expect(bodyParsed).to.deep.equal(referenceBody);
          done();
        });
      });
    });

    describe("POST /login with body", () => {
      it("Responds with 200 and correct name Betty", (done) => {
        const options = {
          url: "http://localhost:7865/login",
          method: "POST",
          json: {
            userName: "Betty",
          },
        };

        request(options, function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(body).to.equal("Welcome Betty");
          done();
        });
      });
    });
    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart 12");
      done();
    });
  });
});
