// ES6 method property
import getBudgetObject from "./7-getBudgetObject";

export default function getFullBudget(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullbudget = {
   ...budget,
    getIncomeInDollars(income) {
    return `$${income}`;
  },
  getIncomeInEuros(income) {
    return `${income} euros`;
  },
};

return fullBudget;
}
