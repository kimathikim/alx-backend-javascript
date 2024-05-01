const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  it("should return 4", function () {
    assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
  });
  it("return 3", function () {
    assert.strictEqual(calculateNumber("SUBTRACT", 5, 2), 3);
  });
  it("retur", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 15, 3), 5);
  });
  it("return Error", function () {
    assert.strictEqual(calculateNumber("DIVIDE", 3.3, 0), "Error");
  });
  it("throw Error", function () {
    assert.throws(() => calculateNumber("MULTIPLY", 3, 3), {
      name: "Error",
      message: "Type must be SUM, SUBTRACT or DIVIDE",
    });
  });
});
