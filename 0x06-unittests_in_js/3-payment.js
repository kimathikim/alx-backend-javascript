const utils = require("./utils");

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const total = utils.calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
};

console.log(sendPaymentRequestToApi(100, 20));
module.exports = sendPaymentRequestToApi;
