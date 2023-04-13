import {
  dayRate,
  daysInBudget,
  priceWithMonthlyDiscount
 } from "./freelancer-rates-2";

// 1.
// takes hourly rate as argument, multiplies it by 8 hours

describe("dayRate", () => {
  test("calculates day rate", () => {
    expect(dayRate(89)).toBe(712);
    expect(dayRate(100)).toBe(800);
    expect(dayRate(122)).toBe(976);
  });
});

// 2.
// arguments: total fixed budget, hourly rate

describe("daysInBudget", () => {
  test("calculates number of days, rounded down", () => {
    expect(daysInBudget(20000, 89)).toBe(28);
    expect(daysInBudget(17589, 96)).toBe(22);
  });
});

// 3.
// arguments: hourly rate, number of project days, monthly discount rate

// number of project days / 22 -> round down = months
// number of project days % 22 = remaining days
// ((((hourly rate * 8) * 22) * months) * (1 - discount rate)
// + (remaining days * (hourly rate * 8))
// = -> rounded up

describe("priceWithMonthlyDiscount", () => {
  test("calculate total price with monthly discount, rounded up", () => {
    expect(priceWithMonthlyDiscount(89, 230, 0.42)).toBe(97972);
    // expect(priceWithMonthlyDiscount()).toBe();
  });
});
