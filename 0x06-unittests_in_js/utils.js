const util = {
  calculateNumber(type, a, b) {
    if (type === "SUM") {
      return Math.round(a) + Math.round(b);
    } else if (type === "SUBTRACT") {
      return Math.round(a) - Math.round(b);
    } else if (type === "DIVIDE") {
      if (Math.round(b) === 0) {
        return "Error";
      }
      return Math.round(a) / Math.round(b);
    } else {
      throw new Error("Type must be SUM, SUBTRACT or DIVIDE");
    }
  },
};
module.exports = util;