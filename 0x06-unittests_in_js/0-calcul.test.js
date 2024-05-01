const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return 4", function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it("return 3", function () {
    assert.strictEqual(calculateNumber(1, 2.3), 3);
  });
  it("return 5", function () {
    assert.strictEqual(calculateNumber(2.3, 3.3), 5);
  });
  it("return 6", function () {
    assert.strictEqual(calculateNumber(2.7, 3.3), 6);
  });
});
